const indexPage = (req, res) => {
    return res.render('index')
}

const authloginPage = (req, res) => {
    return res.render('authentication-login')
}

const authregisterPage = (req, res) => {
    return res.render('authentication-register')
}

const chartPage = (req, res) => {
    return res.render('charts')
}

const error403Page = (req, res) => {
    return res.render('error-403')
}

const error404Page = (req, res) => {
    return res.render('error-404')
}

const error405Page = (req, res) => {
    return res.render('error-405')
}

const error500Page = (req, res) => {
    return res.render('error-500')
}

const formBasic = (req, res) => {
    return res.render('form-basic')
}

const formWizard = (req, res) => {
    return res.render('form-wizard')
}

const grid = (req, res) => {
    return res.render('grid')
}

const iconFontAwesome = (req, res) => {
    return res.render('icon-fontawesome')
}

const iconMaterial = (req, res) => {
    return res.render('icon-material')
}

const index2Page = (req, res) => {
    return res.render('index2')
}

const pagesBtn = (req, res) => {
    return res.render('pages-buttons')
}

const pagesCalendar = (req, res) => {
    return res.render('pages-calendar')
}

const pagesChat = (req, res) => {
    return res.render('pages-chat')
}

const pagesEle = (req, res) => {
    return res.render('pages-elements')
}

const pagesGallery = (req, res) => {
    return res.render('pages-gallery')
}

const pagesInvoice = (req, res) => {
    return res.render('pages-invoice')
}

const tablePage = (req, res) => {
    return res.render('tables')
}

const widgetsPage = (req, res) => {
    return res.render('widgets')
}

module.exports = { indexPage, authloginPage, authregisterPage, chartPage, error403Page, error404Page, error405Page, error500Page, formBasic, formWizard, grid, iconFontAwesome, iconMaterial, index2Page, pagesBtn, pagesCalendar, pagesChat, pagesEle, pagesGallery, pagesInvoice, tablePage, widgetsPage }