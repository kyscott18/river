import { AudioPlayer, VideoPlayer } from '@/client'
import { Flex, Stack, Typography } from '@/design-system'
import { getChannelWithId } from '@/gql'
import {
  type MediaAssetObject,
  ipfsUrlToCid,
  isAudio,
  isGlb,
  isImage,
  isMarkdown,
  isPdf,
  isVideo,
  w3sUrlFromCid,
} from '@/lib'
import { ItemSidebar } from '@/server'
import { kv } from '@vercel/kv'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import * as React from 'react'
import { P, match } from 'ts-pattern'

const MarkdownRenderer = dynamic(
  () => import('../../../../components/client/renderers/MarkdownRenderer'),
  { ssr: false },
)

const ModelRenderer = dynamic(
  () => import('../../../../components/client/renderers/ModelRenderer'),
  { ssr: false },
)

const PdfViewer = dynamic(
  () => import('../../../../components/client/renderers/PDFViewer'),
  { ssr: false },
)

export default async function ItemPage({
  params,
  searchParams,
}: {
  params: { id: string; index: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { channel } = await getChannelWithId({
    id: params.id,
  })

  const totalItems = channel?.adds?.items?.length ?? 0
  const reversedIndex = totalItems - Number(params.index)
  const itemToRender = channel?.adds?.items?.[reversedIndex]

  const itemMetadata = await kv.get<Pick<MediaAssetObject, 'value'>['value']>(
    itemToRender?.item.uri as string,
  )

  const contentType = itemMetadata?.contentType as string

  let contentUrl: string | undefined

  if (
    itemMetadata?.contentType === 'model/gltf-binary' ||
    itemMetadata?.contentType === 'application/pdf' ||
    itemMetadata?.contentType === 'text/markdown' ||
    isAudio({ mimeType: itemMetadata?.contentType as string })
  ) {
    const cid = ipfsUrlToCid({ ipfsUrl: itemMetadata?.animationUri as string })
    contentUrl = w3sUrlFromCid({ cid })
  } else {
    const cid = ipfsUrlToCid({ ipfsUrl: itemMetadata?.image as string })
    contentUrl = w3sUrlFromCid({ cid })
  }

  const content = match(contentType)
    .with(
      P.when((type) => isImage({ mimeType: type })),
      () => (
        <div className="relative h-full md:mx-40">
          <Image
            className="object-contain"
            src={contentUrl as string}
            alt={itemMetadata?.name as string}
            fill
            quality={100}
            priority={true}
          />
        </div>
      ),
    )
    .with(
      P.when((type) => isVideo({ mimeType: type })),
      () => (
        <Flex className="h-full">
          <VideoPlayer playbackId={itemMetadata?.muxPlaybackId as string} />
        </Flex>
      ),
    )
    .with(
      P.when((type) => isAudio({ mimeType: type })),
      () => <AudioPlayer playbackId={itemMetadata?.muxPlaybackId as string} />,
    )
    .with(
      P.when((type) => isPdf({ mimeType: type })),
      () => <PdfViewer file={contentUrl as string} />,
    )
    .with(
      P.when((type) => isGlb({ mimeType: type })),
      () => <ModelRenderer src={contentUrl as string} />,
    ) // TODO: Update styling for markdown renderer
    .with(
      P.when((type) => isMarkdown({ mimeType: type })),
      () => <MarkdownRenderer contentUrl={contentUrl as string} />,
    )
    .otherwise(() => (
      <Stack className="h-full items-center justify-center">
        <Typography className="text-secondary-foreground">
          Unsupported file type
        </Typography>
      </Stack>
    ))

  return (
    <Stack className="h-[calc(100dvh-var(--header-height))] md:flex-row">
      <div className="bg-[#F3F4F6] w-full h-full md:w-[78%]">{content}</div>
      <div className="md:w-[22%]">
        <ItemSidebar
          // @ts-ignore
          itemContext={itemToRender}
          itemMetadata={itemMetadata}
          // @ts-ignore
          channel={channel}
          view={searchParams.view}
        />
      </div>
    </Stack>
  )
}
