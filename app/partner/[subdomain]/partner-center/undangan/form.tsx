"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Card, Divider, Heading } from "@chakra-ui/react";
import Formbuilder from "../components/Formbuilder";
import { IField } from "../components/Formbuilder";

export type DataInv = {
  generalTheme: string;
  generalMusic: string;
  generalUrl: string;
  coverBrideName: string;
  coverGroomName: string;
  coverBackground: string;
  headerBrideName: string;
  headerGroomName: string;
  headerDate: string;
  headerBackground: string;
  welcomeText: string;
  welcomeDate: string;
  welcomeIsActive: boolean;
  profileBrideName: string;
  profileGroomName: string;
  profileGroomPhoto: string;
  profileBridePhoto: string;
  profileParentBride: string;
  profileParentGroom: string;
  profileSocialMediaGroom: string;
  profileSocialGroomLink: string;
  profileSocialMediaBride: string;
  profileSocialBrideLink: string;
  quoteInitial: string;
  quoteText: string;
  quoteSource: string;
  quoteIsActive: boolean;
  eventFirstName: string;
  eventFirstDate: string;
  eventFirstLocation: string;
  eventFirstLink: string;
  eventFirstPhoto: string;
  eventSecondName: string;
  eventSecondDate: string;
  eventSecondLocation: string;
  eventSecondLink: string;
  eventSecondPhoto: string;
  sotryIsActive: boolean;
  storyIsVideo: boolean;
  storyVideoLink: string;
  storyText: string;
  storyTimelineActive: boolean;
  sItemFirstIcon: string;
  sItemFirstYear: string;
  sItemFirstTitle: string;
  sItemFirstDescription: string;
  sItemSecondIcon: string;
  sItemSecondYear: string;
  sItemSecondTitle: string;
  sItemSecondDescription: string;
  sItemThirdIcon: string;
  sItemThirdYear: string;
  sItemThirdTitle: string;
  sItemThirdDescription: string;
  galeryItems: [];
  giftIsActive: boolean;
  giftBankBride: string;
  giftRekBride: string;
  giftBankGroom: string;
  giftRekGroom: string;
  giftAddress: string;
  giftRekNameBride: string;
  giftRekNameGroom: string;
  commentsIsActive: boolean;
  confirmationIsActive: boolean;
  footerImage: string;
}

const DS_SOCIAL_MEDIA = [
  {id: 'instagram', name: 'Instagram'},
  {id: 'facebook', name: 'Facebook'},
  {id: 'twitter', name: 'Twitter'},
]
export const DS_BANK = [
  {id: 'BCA', name: 'BCA', image: '/bca.webp'},
  {id: 'BNI', name: 'BNI', image: '/bni.png'},
  {id: 'BRI', name: 'BRI', image: '/bri.png'},
  {id: 'MANDIRI', name: 'MANDIRI', image: '/mandiri.webp'},
  {id: 'BSI', name: 'BSI', image: '/bsi.png'},
  {id: 'DANA', name: 'DANA', image: '/dana.webp'},
  {id: 'DANAMON', name: 'DANAMON', image: '/danamon.png'},
  {id: 'GOPAY', name: 'GOPAY', image: '/gopay.png'},
  {id: 'LINKAJA', name: 'LINKAJA', image: '/linkaja.png'},
]

const DS_THEMES = [
  {id: 'Smooth', name: 'Smooth'},
  {id: 'CasualWe', name: 'CasualWe'},
]

function Form({form}: any) {
  const fieldsGeneral: IField<DataInv>[] = [
    {
      id: 'generalUrl',
      type: 'text',
      label: 'ID di URL Pengantin',
      isRequired: true
    },
    {
      id: 'generalTheme',
      type: 'dropdown',
      label: 'Tema Undangan',
      datasources: DS_THEMES,
      isRequired: true
    },
    {
      id: 'generalMusic',
      type: 'upload-sound',
      label: 'Musik Undangan',
      isRequired: true,
      disabled: !form.getValues('generalUrl')
    }
  ];
  const fieldsCover: IField<DataInv>[] = [
    {
      id: 'coverGroomName',
      type: 'text',
      label: 'Nama Pengantin Pria di Sampul',
      isRequired: true
    },
    {
      id: 'coverBrideName',
      type: 'text',
      label: 'Nama Pengantin Wanita di Sampul',
      isRequired: true
    },
    {
      id: 'coverBackground',
      type: 'upload-single',
      label: 'Foto Cover',
      isRequired: true,
      disabled: !form.getValues('generalUrl')
    }
  ]
  const fields: IField<DataInv>[] = [
    {
      id: 'headerBrideName',
      type: 'text',
      label: 'Nama Pendek Pengantin Wanita di Header',
      isRequired: true
    },
    {
      id: 'headerGroomName',
      type: 'text',
      label: 'Nama Pendek Pengantin Pria di Header',
      isRequired: true
    },
    {
      id: 'headerDate',
      type: 'date',
      label: 'Tanggal Acara di Header',
      onChange: ({ target }) => {
        const { value } = target;
        form.setValue('welcomeDate', value);
      },
      isRequired: true
    },
    {
      id: 'headerBackground',
      type: 'upload-single',
      label: 'Foto Header',
      isRequired: true,
      disabled: !form.getValues('generalUrl')
    }
  ];
  const fieldsWelcome: IField<DataInv>[] = [
    {
      id: 'welcomeIsActive',
      type: 'switch',
      label: 'Aktifkan Menu Ini',
    },
    {
      id: 'welcomeText',
      type: 'text',
      label: 'Kata-Kata Welcome',
      isRequired: form.getValues('welcomeIsActive')
    },
    {
      id: 'welcomeDate',
      type: 'date',
      label: 'Tanggal Countdown',
      isRequired: form.getValues('welcomeIsActive')
    },
  ];
  const fieldsProfile: IField<DataInv>[] = [
    {
      id: 'profileBrideName',
      type: 'text',
      label: 'Nama Lengkap Pengantin Wanita',
      isRequired: true
    },
    {
      id: 'profileBridePhoto',
      type: 'upload-single',
      label: 'Foto Pengantin Wanita',
      isRequired: true,
      disabled: !form.getValues('generalUrl')
    },
    {
      id: 'profileParentBride',
      type: 'text',
      label: 'Pengantin Wanita Anak Dari',
      isRequired: true
    },
    {
      id: 'profileSocialMediaBride',
      type: 'dropdown',
      label: 'Social Media Pengantin Wanita',
      datasources: DS_SOCIAL_MEDIA,
      isRequired: true
    },
    {
      id: 'profileSocialBrideLink',
      type: 'text',
      label: 'Link Akun Social Media Wanita',
      isRequired: true
    },
    {
      id: 'profileGroomName',
      type: 'text',
      label: 'Nama Lengkap Pengantin Pria',
      isRequired: true
    },
    {
      id: 'profileGroomPhoto',
      type: 'upload-single',
      label: 'Foto Pengantin Pria',
      isRequired: true,
      disabled: !form.getValues('generalUrl')
    },
    {
      id: 'profileParentGroom',
      type: 'text',
      label: 'Pengantin Pria Anak Dari',
      isRequired: true
    },
    {
      id: 'profileSocialMediaGroom',
      type: 'dropdown',
      label: 'Social Media Pengantin Pria',
      datasources: DS_SOCIAL_MEDIA,
      isRequired: true
    },
    {
      id: 'profileSocialGroomLink',
      type: 'text',
      label: 'Link Akun Social Media Pria',
      isRequired: true
    },
  ];
  const fieldsQuote: IField<DataInv>[] = [
    {
      id: 'quoteIsActive',
      type: 'switch',
      label: 'Aktifkan Menu Ini',
    },
    {
      id: 'quoteInitial',
      type: 'text',
      label: 'Inisial ke 2 Pengantin',
      isRequired: form.getValues('quoteIsActive')
    },
    {
      id: 'quoteText',
      type: 'text',
      label: 'Kata-Kata Quote',
      isRequired: form.getValues('quoteIsActive')
    },
    {
      id: 'quoteSource',
      type: 'text',
      label: 'Sumber Quote',
      isRequired: form.getValues('quoteIsActive')
    },
  ];
  const fieldsEvents: IField<DataInv>[] = [
    {
      id: 'eventFirstName',
      type: 'text',
      label: 'Nama Acara Pertama',
      isRequired: true
    },
    {
      id: 'eventFirstDate',
      type: 'date',
      label: 'Tanggal Acara Pertama',
      isRequired: true
    },
    {
      id: 'eventFirstLocation',
      type: 'text',
      label: 'Lokasi Acara Pertama',
      isRequired: true
    },
    {
      id: 'eventFirstLink',
      type: 'text',
      label: 'Link Map Acara Kedua',
      isRequired: true
    },
    {
      id: 'eventFirstPhoto',
      type: 'upload-single',
      label: 'Foto Acara Pertama',
      isRequired: true,
      disabled: !form.getValues('generalUrl')
    },
    {
      id: 'eventSecondName',
      type: 'text',
      label: 'Nama Acara Kedua',
      isRequired: true
    },
    {
      id: 'eventSecondDate',
      type: 'date',
      label: 'Tanggal Acara Kedua',
      isRequired: true
    },
    {
      id: 'eventSecondLocation',
      type: 'text',
      label: 'Lokasi Acara Kedua',
      isRequired: true
    },
    {
      id: 'eventSecondLink',
      type: 'text',
      label: 'Link Map Acara Kedua',
      isRequired: true
    },
    {
      id: 'eventSecondPhoto',
      type: 'upload-single',
      label: 'Foto Acara Kedua',
      isRequired: true,
      disabled: !form.getValues('generalUrl')
    },
  ];
  const fieldsStory: IField<DataInv>[] = [
    {
      id: 'sotryIsActive',
      type: 'switch',
      label: 'Aktifkan Menu Ini',
    },
    {
      id: 'storyIsVideo',
      type: 'switch',
      label: 'Aktifkan Fitur Video',
    },
    {
      id: 'storyVideoLink',
      type: 'text',
      label: 'Upload Video Story',
      isRequired: form.getValues('storyIsVideo'),
      disabled: !form.getValues('generalUrl')
    },
    {
      id: 'storyText',
      type: 'text',
      label: 'Story Singkat',
      isRequired: form.getValues('sotryIsActive')
    },
    {
      id: 'storyTimelineActive',
      type: 'switch',
      label: 'Aktifkan Fitur Timeline',
    },
  ];
  const fieldsStoryItemFirst: IField<DataInv>[] = [
    // {
    //   id: 'sItemFirstIcon',
    //   type: 'text',
    //   label: 'Icon Story 1',
    // },
    {
      id: 'sItemFirstYear',
      type: 'text',
      label: 'Tahun Story 1',
      isRequired: form.getValues('storyTimelineActive')
    },
    {
      id: 'sItemFirstTitle',
      type: 'text',
      label: 'Title Story 1',
    },
    {
      id: 'sItemFirstDescription',
      type: 'text',
      label: 'Deskripsi Story 1',
    },
  ];
  const fieldsStoryItemSecond: IField<DataInv>[] = [
    // {
    //   id: 'sItemSecondIcon',
    //   type: 'text',
    //   label: 'Icon Story 2',
    // },
    {
      id: 'sItemSecondYear',
      type: 'text',
      label: 'Tahun Story 2',
    },
    {
      id: 'sItemSecondTitle',
      type: 'text',
      label: 'Title Story 2',
    },
    {
      id: 'sItemSecondDescription',
      type: 'text',
      label: 'Deskripsi Story 2',
    },
  ];
  const fieldsStoryItemThird: IField<DataInv>[] = [
    // {
    //   id: 'sItemThirdIcon',
    //   type: 'text',
    //   label: 'Icon Story 3',
    // },
    {
      id: 'sItemThirdYear',
      type: 'text',
      label: 'Tahun Story 3',
    },
    {
      id: 'sItemThirdTitle',
      type: 'text',
      label: 'Title Story 3',
    },
    {
      id: 'sItemThirdDescription',
      type: 'text',
      label: 'Deskripsi Story 3',
    },
  ];
  const fieldsGallery: IField<DataInv>[] = [
    {
      id: 'galeryItems',
      type: 'upload-multiple',
      label: 'Upload Foto Gallery',
      isRequired: true,
      disabled: !form.getValues('generalUrl')
    },
  ];
  const fieldsGifts: IField<DataInv>[] = [
    {
      id: 'giftIsActive',
      type: 'switch',
      label: 'Aktifkan Menu Ini',
    },
    {
      id: 'giftBankBride',
      type: 'dropdown',
      label: 'Bank Rekening Pengantin Wanita',
      datasources: DS_BANK,
      isRequired: form.getValues('giftIsActive')
    },
    {
      id: 'giftRekBride',
      type: 'text',
      label: 'No Rekening Pengantin Wanita',
      isRequired: form.getValues('giftIsActive')
    },
    {
      id: 'giftRekNameBride',
      type: 'text',
      label: 'Nama di Rekening Pengantin Wanita',
      isRequired: form.getValues('giftIsActive')
    },
    {
      id: 'giftBankGroom',
      type: 'dropdown',
      label: 'Bank Rekening Pengantin Pria',
      datasources: DS_BANK,
    },
    {
      id: 'giftRekGroom',
      type: 'text',
      label: 'No Rekening Pengantin Pria',
    },
    {
      id: 'giftRekNameGroom',
      type: 'text',
      label: 'Nama di Rekening Pengantin Pria',
    },
    {
      id: 'giftAddress',
      type: 'text',
      label: 'Alamat Pengiriman Kado',
    },
  ];
  const fieldsComment: IField<DataInv>[] = [
    {
      id: 'commentsIsActive',
      type: 'switch',
      label: 'Aktifkan Menu Ucapan dan Doa',
    },
  ];
  const fieldsConfirmation: IField<DataInv>[] = [
    {
      id: 'confirmationIsActive',
      type: 'switch',
      label: 'Aktifkan Menu Konfirmasi Kehadiran',
    },
  ];
  const fieldsFooter: IField<DataInv>[] = [
    {
      id: 'footerImage',
      type: 'upload-single',
      label: 'Upload Gambar Footer',
      isRequired: true,
      disabled: !form.getValues('generalUrl')
    },
  ];

  return (
    <>
      <div className="w-full px-4 py-4 flex flex-col gap-4">
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">General</p>
          <Formbuilder fields={fieldsGeneral} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Cover / Sampul</p>
          <Formbuilder fields={fieldsCover} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Header</p>
          <Formbuilder fields={fields} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Welcome & Countdown</p>
          <Formbuilder fields={fieldsWelcome} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Profil Pengantin</p>
          <Formbuilder fields={fieldsProfile} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Quote/Ayat</p>
          <Formbuilder fields={fieldsQuote} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Events/Acara</p>
          <Formbuilder fields={fieldsEvents} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Story</p>
          <Formbuilder fields={fieldsStory} form={form} />
          <Divider className="py-2" />
          <p className="font-semibold text-xl text-right mt-2">Story Timeline 1</p>
          <Formbuilder fields={fieldsStoryItemFirst} form={form} />
          <Divider className="py-2" />
          <p className="font-semibold text-xl text-right mt-2">Story Timeline 2</p>
          <Formbuilder fields={fieldsStoryItemSecond} form={form} />
          <Divider className="py-2" />
          <p className="font-semibold text-xl text-right mt-2">Story Timeline 3</p>
          <Formbuilder fields={fieldsStoryItemThird} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Gallery</p>
          <Formbuilder fields={fieldsGallery} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Gifts/Hadiah</p>
          <Formbuilder fields={fieldsGifts} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Ucapan dan Doa</p>
          <Formbuilder fields={fieldsComment} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Konfirmasi Kehadiran</p>
          <Formbuilder fields={fieldsConfirmation} form={form} />
        </Card>
        <Card className="px-6 py-6">
          <p className="font-semibold text-xl text-right">Footer</p>
          <Formbuilder fields={fieldsFooter} form={form} />
        </Card>
      </div>
    </>
  );
}

export default Form;