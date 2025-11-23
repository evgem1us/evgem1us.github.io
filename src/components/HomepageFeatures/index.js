import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Собираю аватары для VRChat\'а с 2023 года',
    fullWidthImg: true,
    img: require('@site/static/img/maid_unity.png').default,
    description: (
      <>
        Тыкаю Unity и Blender, помогаю друзьям с аватарами, а для всех решил заняться гайдами
        и написанием пакетиков для автоматизации рутинных вещей.<br/>
        Коммишки не беру, даю удочку.
      </>
    ),
  },
  {
    title: 'ИРЛ Разработчик встраиваемых систем',
    img: require('@site/static/img/maid_soldering.png').default,
    fullWidthImg: true,
    description: (
      <>
        Умею разбираться в непонятной фигне, которая должна надежно работать.
        Пишу на С/С++, шарю за архитектуру процессоров в микроконтроллерах,
        знаю за какую сторону держать паяльник и тяну из IT хорошие практики.
      </>
    ),
  },
  {
    title: 'Мейд-кафе Koi No Niwa',
    img: require('@site/static/img/koinoniwa.png').default,
    fullWidthImg: true,
    links: [
      {
        label: 'VRChat',
        href: 'https://vrchat.com/home/group/grp_7dda67ae-8c4f-442d-9117-208adc9a9bf2',
      },
      {label: 'Discord', href: 'https://discord.gg/EgRWFBdUgz'},
      {label: 'Telegram', href: 'https://t.me/koinoniwachat'},
      {label: 'YouTube', href: 'https://www.youtube.com/@Koinoniwa'},
      {label: 'TikTok', href: 'https://www.tiktok.com/@koi.no.niwa'},
    ],
    description: (
      <>
        Отыгрываю мейдочку в{' '}
        <a
          href="https://vrchat.com/home/group/grp_7dda67ae-8c4f-442d-9117-208adc9a9bf2"
          target="_blank"
          rel="noreferrer"
        >
          Koi No Niwa
        </a>
        {' '}
        в VRChat. Ивенты каждую субботу в 20:00 МСК, приходите!
      </>
    ),
  }
];

function Feature({Svg, img, title, description, links, fullWidthImg}) {
  const getLinkClass = link => {
    const label = link.label?.toLowerCase?.() ?? '';
    const href = link.href ?? '';

    if (href.includes('coub.com')) {
      return styles.coub;
    }

    switch (label) {
      case 'discord':
        return styles.discord;
      case 'telegram':
        return styles.telegram;
      case 'vrchat':
        return styles.vrchat;
      case 'youtube':
        return styles.youtube;
      case 'tiktok':
        return styles.tiktok;
      default:
        return '';
    }
  };

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img
            src={img}
            className={clsx(styles.featureImg, fullWidthImg && styles.featureImgWide)}
            alt={title}
            loading="lazy"
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {links?.length ? (
          <div className={styles.featureButtons}>
            {links.map(link => (
              <a
                key={link.href}
                className={clsx(styles.brandButton, getLinkClass(link))}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
