const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');


async function sendRegisterMail(userEmail) {
    const msg = {
        to: userEmail,
        from: 'crowdfundingcrowd@gmail.com',
        //from: 'mon.amour.wedding.agency@gmail.com',
        subject: 'Вітаємо',
        text: `Вітаємо із реєстрацією у INCROWD!`,
    };
    sgMail.send(msg).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    });
}

async function sendMailToMonAmour(body) {
    const {
        budget,
        communityName,
        detailDescription,
        durationDays,
        projectName,
        projectTeam,
        regionName,
        shortDescription,

        allCategories,
        transport,
        kids,
        health,
        literature,
        economic,
        education,
        internet,
        ecology,
        technology,
        roads,
        socialBusiness
    } = body;

    const chousedCategories = [];
    if (allCategories) chousedCategories.push("Усі категорії");
    if (transport) chousedCategories.push("Транспорт");
    if (kids) chousedCategories.push("Діти");
    if (health) chousedCategories.push("Здоров'я");
    if (literature) chousedCategories.push("Література");
    if (economic) chousedCategories.push("Економіка");
    if (education) chousedCategories.push("Освіта");
    if (internet) chousedCategories.push("Інтернет");
    if (ecology) chousedCategories.push("Екогологія");
    if (technology) chousedCategories.push("Технології");
    if (roads) chousedCategories.push("Дороги");
    if (socialBusiness) chousedCategories.push("Соціальний бізнес");

    const msg = {
        to: 'crowdfundingcrowd@gmail.com',
        from: 'crowdfundingcrowd@gmail.com',  
        subject: 'Повідомлення від клієнта із сайту',
        text: `Бюджет: ${budget}\nІм'я ОТГ: ${communityName}\nДетальний опис: ${detailDescription}\nТривалість збору: ${durationDays}\nІм'я проекту:: ${projectName}\nКоманда проекту: ${projectTeam}\nОбласть: ${regionName}\nКороткий опис: ${shortDescription}\nОбрані категорії: ${chousedCategories.join(', ')}`,
    };
    sgMail.send(msg).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    });
}

module.exports = { sendRegisterMail, sendMailToMonAmour };



