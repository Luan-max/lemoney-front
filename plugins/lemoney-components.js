import Vue from 'vue'
import LkpRow from '@/components/shared/LkpRow'
import LkpCol from '@/components/shared/LkpCol'
import LkpHeader from '@/components/shared/LkpHeader'
import LkpForm from '@/components/shared/LkpForm'
import LkpInput from '@/components/shared/LkpInput'
import LkpTextField from '@/components/shared/LkpTextField'
import LkpSelect from '@/components/shared/LkpSelect'
import LkpBtn from '@/components/shared/LkpBtn'
import LkpSideMenu from '@/components/shared/LkpSideMenu'
import LkpSnackbar from '@/components/shared/LkpSnackbar'
import LkpSideMenuValidate from '@/components/shared/LkpSideMenuValidate'

const components = { LkpRow, LkpCol, LkpForm, LkpInput, LkpBtn, LkpHeader, LkpSideMenu, LkpSnackbar, LkpSideMenuValidate, LkpSelect, LkpTextField }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
