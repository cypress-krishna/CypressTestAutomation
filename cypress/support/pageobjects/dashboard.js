class Dashboard_PO {

    verifyNavLinkElem(navElemLink) {
        cy.get('.nav-link').each(($e1, index, navList) => {
            const getNavListItemsEach = $e1.text()
            if(getNavListItemsEach == navElemLink){  
                cy.log('User login is successful')
            }
        });
    }

}

export default Dashboard_PO;