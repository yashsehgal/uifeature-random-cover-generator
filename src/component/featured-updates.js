
function getFeaturedUpdates() {
    const featuredUpdates = [
        {
            title: 'Raising $60M from Tesla',
            description: "Funding alert! Recently we have raised $60M of funding from Tesla, Inc.",
            tags: ["startup", "tech", "funding"],
            hasAction: false
        },
        {
            title: 'New Themes are now available',
            description: "30+ more themes are now available now for business users. Explore more themes from the template marketplace",
            hasAction: true,
            action: {
                type: 'button',
                url: 'https://invoicetor.works',
                text: 'Explore Themes 😍'
            }
        },
        {
            title: 'See How Big Tech Companies are using Invoicetor',
            description: 'Top 10 from the fortune 100 companies are suggesting to use Invoicetor as the go to invoice maker tool.',
            hasAction: true,
            action :{
                type: 'link',
                url: 'https://invoicetor.works',
                text: 'Read Blog'
            }
        },
        {
            title: 'Raising $60M from Tesla',
            description: "Funding alert! Recently we have raised $60M of funding from Tesla, Inc.",
            tags: ["startup", "tech", "funding"],
            hasAction: false
        },
        {
            title: 'New Themes are now available',
            description: "30+ more themes are now available now for business users. Explore more themes from the template marketplace",
            hasAction: true,
            action: {
                type: 'button',
                url: 'https://invoicetor.works',
                text: 'Learn more'
            }
        },
        {
            title: 'See How Big Tech Companies are using Invoicetor',
            description: 'Top 10 from the fortune 100 companies are suggesting to use Invoicetor as the go to invoice maker tool.',
            hasAction: true,
            action :{
                type: 'link',
                url: 'https://invoicetor.works',
                text: 'Read Blog'
            }
        }
    ];
    return featuredUpdates;
}

export {
    getFeaturedUpdates
}