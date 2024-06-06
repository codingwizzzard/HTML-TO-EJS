const { Router } = require("express");
const { indexPage, authloginPage, authregisterPage, chartPage, error403Page, error404Page, error500Page, formBasic, formWizard, grid, iconFontAwesome, index2Page, pagesBtn, iconMaterial, pagesCalendar, pagesChat, pagesEle, pagesGallery, pagesInvoice, tablePage, widgetsPage, error405Page } = require("../controllers/controller");

const router = Router()

router.get('/', indexPage)
router.get('/authentication-login', authloginPage)
router.get('/authentication-register', authregisterPage)
router.get('/charts', chartPage)
router.get('/error-403', error403Page)
router.get('/error-404', error404Page)
router.get('/error-405', error405Page)
router.get('/error-500', error500Page)
router.get('/form-basic', formBasic)
router.get('/form-wizard', formWizard)
router.get('/grid', grid)
router.get('/icon-fontawesome', iconFontAwesome)
router.get('/icon-material', iconMaterial)
router.get('/index2', index2Page)
router.get('/pages-buttons', pagesBtn)
router.get('/pages-calendar', pagesCalendar)
router.get('/pages-chat', pagesChat)
router.get('/pages-elements', pagesEle)
router.get('/pages-gallery', pagesGallery)
router.get('/pages-invoice', pagesInvoice)
router.get('/tables', tablePage)
router.get('/widgets', widgetsPage)

module.exports = router