import { ICharacter, IProject } from '@vision/core';
import { SliceType } from 'models/store';
import { createDocument } from 'utils/firebase';
import { log } from 'utils/logger';

export const seedProject = (userId: string): void => {
  const data: IProject[] = [
    {
      audio: {
        action: 'https://delta.vgmsite.com/soundtracks/marvel-s-spider-man-video-game-soundtrack-playstation-4/njozimutpd/02.%20Eight%20Years%20in%20the%20Making.mp3https://downloads.khinsider.com/game-soundtracks/album/marvel-s-spider-man-video-game-soundtrack-playstation-4/02.%2520Eight%2520Years%2520in%2520the%2520Making.mp3',
        explore: 'https://delta.vgmsite.com/soundtracks/marvel-s-spider-man-video-game-soundtrack-playstation-4/ovdtxhtwbt/04.%20The%20Golden%20Age.mp3',
        idle: 'https://delta.vgmsite.com/soundtracks/marvel-s-spider-man-video-game-soundtrack-playstation-4/elbazuuksw/22.%20No%20Going%20Back.mp3',
        tactical: 'https://delta.vgmsite.com/soundtracks/marvel-s-spider-man-video-game-soundtrack-playstation-4/cxnyjdktwj/10.%20Webbed%20from%20the%20Shadows.mp3',
        theme: 'https://github.com/bilo-io/vision-assets/raw/master/CDN/DEV/assets/audio/themesong-spiderman.mp3'
      },
      executiveSummary: 'Spider-Man is an action-packed game that allows players to swing through the city as the iconic superhero. Combines compelling storytelling with thrilling gameplay.',
      features: [
        'dashboards',
        'documents',
        'controls',
        'characters',
        'locations',
        'images',
        'videos',
        'sounds',
        'dialogues',
        'graphs'
      ],
      id: 'spiderman',
      images: {
        coverImage: 'https://w0.peakpx.com/wallpaper/168/4/HD-wallpaper-marvels-spider-man-2-8k-marvels-spider-man-2-spider-man-2-spiderman-2023-games-ps5-games-superheroes-artwork-artist-games.jpg',

        slides: [
          'https://images.hindustantimes.com/tech/img/2022/12/16/960x540/Spiderman_2_1671179716696_1671179729903_1671179729903.jpg',
          'https://images.alphacoders.com/133/thumbbig-1338679.webp',
          'https://images2.alphacoders.com/134/thumbbig-1340251.webp',
          'https://images6.alphacoders.com/134/1340252.jpeg',
          // 'https://images4.alphacoders.com/133/1336947.png',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8bBpvmgAVibq6pvvgjIIsPrC9BL-458pFpk0BhDNP0sB3PUFXd6CNpmPAoMRqye6tj0&usqp=CAU',
          'https://images5.alphacoders.com/131/1319327.jpeg',
          'https://i.pinimg.com/736x/5d/0c/a0/5d0ca0192729610f049c14e036e19e3a.jpg',
          'https://i.pinimg.com/564x/7b/86/f6/7b86f63e42fcddc8f0416674f9417e49.jpg',
          'https://i.pinimg.com/564x/e2/e4/70/e2e47092d63583008406bffea9576067.jpg',
          'https://i.pinimg.com/564x/18/d8/ba/18d8ba4bafb56c6ebcd50ee5cc4ad849.jpg',
          'https://i.pinimg.com/564x/9e/78/95/9e7895ce840b9e083f88ef6a0790d4a7.jpg',
          'https://i.pinimg.com/564x/55/de/40/55de40dce52712bf20812a8ef67ba01c.jpg',
          'https://i.pinimg.com/564x/30/5d/d1/305dd13bad3eb4f7298d90ec3270d841.jpg',
          'https://i.pinimg.com/564x/44/cf/06/44cf067e387f380a2aab6bf6f500f652.jpg',
          'https://i.pinimg.com/474x/38/73/d8/3873d8bbf439790a7228b7c231c1cc2b.jpg',
          // '',
          // '',
        ],


        thumbAlign: 'top',
        // thumbImage: 'https://w0.peakpx.com/wallpaper/910/556/HD-wallpaper-spider-man-logo-in-paint-marvel-superhero.jpg',
        thumbImage: 'https://images4.alphacoders.com/133/1336947.png',
        titleImage: 'https://freepngimg.com/save/83062-parker-spiderman-text-may-miles-morales-red/2200x800',
      },
      name: 'Spider-Man',
    },
    {
      audio: {
        theme: 'https://github.com/bilo-io/vision-assets/raw/master/CDN/DEV/assets/audio/themesong-invincible-epic.mp3'
      },
      executiveSummary: 'Invincible is a comic book series created by writer Robert Kirkman. It follows Mark Grayson, a teenager with superpowers, as he learns about his father\'s legacy.',
      features: [
        'dashboards',
        'documents',
        'controls',
        'characters',
        'locations',
        'images',
        'videos',
        'sounds',
        'dialogues',
        'graphs'
      ],
      id: 'invincible',
      images: {
        coverImage: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/10/invincible-fight-header.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
        slides: [
          'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/01/ryan-potter-invincible.jpg',
          'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4zfCur3CG6CZ7ciRj9lneD/264de4a5758e40859b03afc4b21b6038/Invincible_GuardingtheGlobe.png',
          'https://i.pinimg.com/564x/ad/c4/9d/adc49df3d275016e8a2684b6d4ef8cb5.jpg',
          'https://i.pinimg.com/564x/b8/a3/41/b8a341d54a4f63f8ef3637da46565aef.jpg',
          'https://images.wallpapersden.com/image/download/omni-man-invincible-show-art_bGxoZ2uUmZqaraWkpJRobWllrWdma2U.jpg',
          'https://i.pinimg.com/564x/e0/9a/6c/e09a6ce4b5a20e1f5433809b4f177083.jpg',
          'https://i.pinimg.com/564x/dd/7c/1b/dd7c1b0c4c821bbbdc3736d0560a4e43.jpg',
          'https://i.pinimg.com/564x/4c/63/93/4c6393f50f791faea80fa8319b5eb9fb.jpg',
          'https://i.pinimg.com/736x/05/60/32/056032b04f45831d5125cc0704243b6b.jpg',
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7ee44965-251a-4116-bb47-8275e4fe1a0a/d3h6lcj-da4e5294-f06a-4a1b-b990-db436a4792c3.jpg/v1/fit/w_800,h_1213,q_70,strp/invincible_compendium_cover_by_ryanottley_d3h6lcj-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxMyIsInBhdGgiOiJcL2ZcLzdlZTQ0OTY1LTI1MWEtNDExNi1iYjQ3LTgyNzVlNGZlMWEwYVwvZDNoNmxjai1kYTRlNTI5NC1mMDZhLTRhMWItYjk5MC1kYjQzNmE0NzkyYzMuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.gTROLIBz1Ea0s8YNjYYi6aQuaC-Exs6-ZAdwFB0udeM',
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/393a49be-01d7-4053-82aa-f69b17eb8697/dafome6-4e00f1e0-00a8-48f0-b4bf-12a699819dfd.jpg/v1/fit/w_828,h_1290,q_70,strp/invincible_movie_poster_colors_by_danimation2001_dafome6-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk5NCIsInBhdGgiOiJcL2ZcLzM5M2E0OWJlLTAxZDctNDA1My04MmFhLWY2OWIxN2ViODY5N1wvZGFmb21lNi00ZTAwZjFlMC0wMGE4LTQ4ZjAtYjRiZi0xMmE2OTk4MTlkZmQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KdXMu_y7PT4ahOm8Mg9h3KeUwaQXPq4nLCDelUPlFY4',
          'https://i.pinimg.com/564x/1f/76/bd/1f76bd371b896d6496fc7732ae8dead8.jpg',
          'https://i.pinimg.com/564x/6f/95/c4/6f95c46bcad6c287898512f1e8be827e.jpg',
          'https://i.pinimg.com/564x/57/39/58/573958d9bc1228b7531673b97d4ded8d.jpg',
          'https://i.pinimg.com/736x/15/86/b8/1586b825109d9c953ec8b7dcec294e35.jpg',
          'https://i.pinimg.com/736x/41/58/7c/41587c7f155123c347f3a42b6a888169.jpg',
          'https://i.pinimg.com/736x/53/fc/48/53fc4847189714b4f82a7c0fd1bbbd29.jpg',
          'https://preview.redd.it/hgk9d2sca0y61.jpg?width=640&crop=smart&auto=webp&s=fbd80409349ed3580012cfdd70f49ac5aea85e0b',
          'https://image.tensorartassets.com/cdn-cgi/image/anim=true,w=500,q=85/model_showcase/0/6435aa88-d323-8500-e711-faf9b750778c.png',
          'https://images-ng.pixai.art/images/orig/c50c808e-6296-45bd-b816-3ee5e4284790',
        ],
        thumbAlign: 'bottom',
        thumbImage: 'https://i.pinimg.com/564x/80/6c/e8/806ce8fa85709c498e27243e6ad8b74e.jpg',
        titleImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Invincible_comic_series_logo.png/1200px-Invincible_comic_series_logo.png',
      },
      name: 'Invincible',
    },
    {
      audio: {
        epic: 'https://delta.vgmsite.com/soundtracks/x-men-destiny-game-soundtrack-ps3-xbox-360-gamerip-2011/pmpnsshxgf/10.%20Peace%20Rally%20-%20Challenge%20Arena%20-%20Seaside%20-%20VS%20Wolverine.mp3',
        theme: 'https://github.com/bilo-io/vision-assets/raw/master/CDN/DEV/assets/audio/themesong-xmen-wolverine.mp3'
      },
      executiveSummary: 'Wolverine, also known as Logan, is a fictional character known for his regenerative healing factor and adamantium claws. A prominent member of the X-Men.',
      features: [
        'dashboards',
        'documents',
        'characters',
        'locations',
        'images',
        'dialogues',
      ],
      id: 'wolverine',
      images: {
        coverImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/597b14fb-4b39-47a6-865f-c7b98cac5996/dftohmb-5c9295db-1b71-49ee-8a7d-0ae3154db622.png/v1/fill/w_1095,h_730,q_70,strp/wolverine_rage_by_laietano_dftohmb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvNTk3YjE0ZmItNGIzOS00N2E2LTg2NWYtYzdiOThjYWM1OTk2XC9kZnRvaG1iLTVjOTI5NWRiLTFiNzEtNDllZS04YTdkLTBhZTMxNTRkYjYyMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NCqhCpvE_yrm10tm8YW0uXGvAKLp_ybm_KDDQdTU8g0',
        slides: [
          'https://i.pinimg.com/originals/1d/68/e2/1d68e20949404a371cdbeaccf69851bf.jpg',
          'https://i.pinimg.com/564x/c5/68/15/c5681523854a69c8898df3d534927620.jpg',
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ff650183-57f9-47f5-8b94-0015d947f4f5/dg3tdhj-d0a59288-524e-4980-a57a-bd20439e37e2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZmNjUwMTgzLTU3ZjktNDdmNS04Yjk0LTAwMTVkOTQ3ZjRmNVwvZGczdGRoai1kMGE1OTI4OC01MjRlLTQ5ODAtYTU3YS1iZDIwNDM5ZTM3ZTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.imDyR4g4ONX_JlmH_Taw7trGmgCOq2M6h81IxC3Lzus',
          'https://preview.redd.it/i-made-some-character-fusions-v0-g7fr9ixcni2b1.jpg?width=640&crop=smart&auto=webp&s=aafe9a146fa0abdc25f6c3b2f350377880c14761',
          'https://i.pinimg.com/564x/56/44/ea/5644ea216bda0d799494810477c6b675.jpg',
          'https://i.pinimg.com/564x/3a/40/cf/3a40cfc356132ea6efbac4e34a036382.jpg',
          'https://i.pinimg.com/564x/47/66/cc/4766cc72a6a95e1da43188876aa5e8a0.jpg',
          'https://i.pinimg.com/564x/84/23/c7/8423c74bbe4f404f8f7a758afed709ae.jpg',
          'https://w0.peakpx.com/wallpaper/857/532/HD-wallpaper-wolverine-dark-wolverine-superheroes-artist-artwork-digital-art-minimalism-minimalist-dark-black.jpg',
          'https://i.pinimg.com/564x/21/9e/b7/219eb711e2bb8925b5ace5e5ceceb67d.jpg',
          'https://i.pinimg.com/564x/85/37/bd/8537bd3951f5c2f6cc1af5238adfd5db.jpg',
          'https://i.pinimg.com/564x/ed/7d/bb/ed7dbbf678637542892b0e95d08e9574.jpg',
          'https://i.pinimg.com/564x/15/50/9d/15509d64b095747d57ecc9c0826ea11b.jpg',
          'https://i.pinimg.com/564x/1e/2b/04/1e2b040311d9314e4397aa60f028e16c.jpg',
          'https://i.pinimg.com/564x/90/9e/c7/909ec7c6aa01d3fc14b3e2fb8b79c8c6.jpg'
        ],
        thumbAlign: 'center',
        thumbImage: 'https://i.pinimg.com/564x/38/b4/77/38b477dc8c679f7ccec8bc7831927fcf.jpg',
        titleImage: 'https://pnghq.com/wp-content/uploads/marvels-wolverine-transparent-image-download-36430.png',
      },
      name: 'Wolverine',
    },
    {
      audio: {
        action: 'https://dl.vgmdownloads.com/soundtracks/dragon-ball-z-kakarot-2020-pc-gamerip/pkjvpolgeo/72.%20Saiyan%20Pride.mp3',
        epic: '',
        idle: '',
        theme: 'https://github.com/bilo-io/vision-assets/raw/master/CDN/DEV/assets/audio/themesong-dbz.mp3'
      },
      executiveSummary: 'Darkomik is an alternate universe where everything has a much darker, and more sinister undertone, without being outright horrifying. Basically, even shocking for adults.',
      features: [
        'dashboards',
        'documents',
        'controls',
        'characters',
        'locations',
        'images',
        'videos',
        'sounds',
        'dialogues',
        'graphs'
      ],
      id: 'darkomik',
      images: {
        coverImage: 'https://i.pinimg.com/564x/77/14/3f/77143f024907f2c9f9487bba67f5b6a3.jpg',
        slides: [
          'https://i.pinimg.com/564x/3b/c9/88/3bc988d12e35e979cb513aa639368e45.jpg',
          'https://i.pinimg.com/736x/a9/51/c8/a951c807dcf3e347443087727fd78e6a.jpg',
          'https://i.pinimg.com/564x/84/f2/2a/84f22afeaa511a4269cdc5c48a08c192.jpg',
          'https://i.pinimg.com/736x/db/71/14/db711473fe74e7f3f86976dea63d9d26.jpg',
          'https://i.pinimg.com/564x/f1/e8/40/f1e8407aea7b532a4051afb7c552073d.jpg',
          'https://i.pinimg.com/564x/46/d8/82/46d88220a2c3ec58bc5d8e91d7748394.jpg',
          'https://i.pinimg.com/736x/2f/9e/18/2f9e18573b4a7f6315b732cc11166650.jpg',
          'https://i.pinimg.com/564x/cd/82/7e/cd827ec3a15fbe581146348bc2c18cbe.jpg',
          'https://i.pinimg.com/564x/17/2f/f5/172ff55299990a4d169c687a9b54f8c0.jpg',
          'https://i.pinimg.com/564x/2c/d4/44/2cd444ef918e0c395e463bf6026ce06f.jpg',
          'https://i.pinimg.com/564x/61/40/ff/6140ff094a79dad3076a35652f3812c2.jpg',
          'https://i.pinimg.com/564x/06/98/cd/0698cd5d1059051ecec8ae79929fa7d2.jpg',
          'https://i.pinimg.com/564x/ef/f4/8b/eff48be7337e858fb32def2382e38ec4.jpg',
          'https://i.pinimg.com/564x/0e/1b/dd/0e1bdd7a1107cc693c6d2893d089170d.jpg',
          'https://i.pinimg.com/564x/19/a0/0c/19a00c51e986be94b2d013bc2314c7de.jpg',
          'https://i.pinimg.com/564x/b9/e9/c1/b9e9c17e8f210b118535e5e6b19ed57f.jpg',
          'https://i.pinimg.com/564x/81/20/5b/81205b996b7b1daac69a793009c72358.jpg',
          'https://i.pinimg.com/564x/da/a2/dc/daa2dcf38c1a153d8be21dc75ce0b2a2.jpg',
        ],
        thumbAlign: 'top',
        thumbImage: 'https://i.pinimg.com/736x/a9/51/c8/a951c807dcf3e347443087727fd78e6a.jpg',
        titleImage: 'https://i.pinimg.com/564x/75/89/1e/75891ea7afe788bf62790519ae7d17cf.jpg',
      },
      name: 'Darkomik',
    }, {
      audio: {
        // idle: 'https://downloads.khinsider.com/game-soundtracks/album/cyberpunk-2077-2020/1-05.%2520Outsider%2520No%2520More.mp3',
        action: 'https://vgmsite.com/soundtracks/cyberpunk-2077-2020/cpjexyptxf/1-17.%20Patri%28di%29ots.mp3',

        epic: 'https://downloads.khinsider.com/game-soundtracks/album/cyberpunk-2077-2020/1-09.%2520Scavengers.mp3',

        explore: 'https://vgmsite.com/soundtracks/cyberpunk-2077-2020/wxufojegbk/1-06.%20Cloudy%20Day.mp3',

        idle: 'https://vgmsite.com/soundtracks/cyberpunk-2077-2020/cmvnpuwufw/1-18.%20Mining%20Minds.mp3',

        // action: 'https://vgmsite.com/soundtracks/cyberpunk-2077-2020/lsjdmmdvkx/1-03.%20The%20Rebel%20Path.mp3',
        tactical: 'https://vgmsite.com/soundtracks/cyberpunk-2077-2020/jdinixihsm/1-11.%20There%27s%20Gonna%20Be%20A%20Parade%21.mp3',

        theme: 'https://github.com/bilo-io/vision-assets/raw/master/CDN/DEV/assets/audio/themesong-johnwick-wetwork.mp3',
      },
      executiveSummary: 'A game design document for Blade Gunner, an action/hack-n-slash shooter.',
      features: [
        'dashboards',
        'documents',
        'controls',
        'characters',
        'locations',
        'dialogues',
        'graphs',
        // AI
        'images',
        'videos',
        'sounds',
        'chats',
        // Experimental
        'sketches',
        'maps',
      ],
      id: 'mystika-warriors',
      images: {
        coverImage: 'https://i.pinimg.com/originals/44/27/04/442704243450dcddc16c0ec32293d10c.jpg',
        slides: [
          'https://i.pinimg.com/564x/96/43/2f/96432f4731a6d6eb5e9a11bfcf8845a1.jpg',
          'https://i.pinimg.com/564x/23/ba/a8/23baa8d55717dc471d6eea18a35fbc90.jpg',
          'https://i.pinimg.com/564x/15/b4/50/15b450d7c3f7f0d907a6e157cb90760e.jpg',

          'https://i.pinimg.com/originals/9f/6a/31/9f6a31f45ac4fc5fb0928eadef3f3bf0.jpg',
          'https://i.pinimg.com/564x/dd/2a/fb/dd2afbe6270059a1d5f76ed60d46ec79.jpg',
          'https://i.pinimg.com/originals/db/e7/74/dbe77481ef6eefd3a5f4243742aa3e7d.png',
          'https://i.pinimg.com/564x/1e/89/cb/1e89cb85a3535c9d346850c0f0afe901.jpg',
          'https://i.pinimg.com/564x/1f/0c/4a/1f0c4a714614fd532a4df0114e7e4db1.jpg',
          'https://i.pinimg.com/originals/12/97/a4/1297a454d516f4f0952f471f7eafc323.jpg',
          'https://i.pinimg.com/originals/90/36/03/90360327e99e35638536feb3ff5a7154.jpg',
          'https://i.pinimg.com/564x/41/58/72/415872f661d6474b5bfd036ab1da82ad.jpg',
          'https://i.pinimg.com/564x/34/bc/9e/34bc9e8d8e6a6559d495f621eab459ff.jpg',
          'https://i.pinimg.com/564x/ad/5d/60/ad5d60cd9366f179c52c5f897f675c1a.jpg',
          'https://i.pinimg.com/564x/12/27/5c/12275c21678e929d1a96ec65aa8295bc.jpg',
          'https://i.pinimg.com/736x/f3/71/eb/f371ebbf336fa8a22ce4b8fa4187af9e.jpg',
          'https://i.pinimg.com/564x/62/2e/7c/622e7c971d2bd99501526e1085e0ed20.jpg',
          'https://i.pinimg.com/564x/4b/cc/cb/4bcccb3b639346cb28f46d08ff2e4f5c.jpg',
          'https://i.pinimg.com/564x/15/a4/ea/15a4ea55639086e2721c0a8634a18c90.jpg',
          'https://i.pinimg.com/564x/47/9f/81/479f81be05786bb2175445d3c8de46c4.jpg',

          //
          'https://i.pinimg.com/originals/d1/62/e0/d162e0d54e08ce7cc798f03a82ec6dc4.jpg',
          'https://i.pinimg.com/564x/f7/4c/63/f74c632ac79bf4920db87ed456c633e6.jpg',
          'https://i.pinimg.com/564x/36/a3/1f/36a31fef8072f88f28ec86bdda0d8800.jpg',
          'https://i.pinimg.com/originals/27/fe/e8/27fee83c456e24700c1a951b53d7e762.jpg',
          'https://i.pinimg.com/564x/a6/22/40/a622401b8906c9486ab63fe6e53894e2.jpg',
          'https://i.pinimg.com/736x/08/d2/7b/08d27b2cb6fc67fb7587b8effdc4b8f9.jpg',
          'https://i.pinimg.com/564x/4f/af/e1/4fafe1b1c425d2d431daf01cc82ddb93.jpg',

        ],

        thumbAlign: 'center',

        // thumbImage: 'https://rare-gallery.com/thumbnail/1396954-Cyberpunk-2077-Video-Game-Car-Samurai-Katana.jpg',
        thumbImage: 'https://i.pinimg.com/564x/b3/f7/9e/b3f79e5d68bd0b67ad5bbde696e6ec6b.jpg',
        titleImage: 'https://imgur.com/vNGNWPl',
      },
      name: 'Mystika: Warriors',
    }, {
      audio: {
        // idle: 'https://downloads.khinsider.com/game-soundtracks/album/cyberpunk-2077-2020/1-05.%2520Outsider%2520No%2520More.mp3',
        action: 'https://vgmsite.com/soundtracks/cyberpunk-2077-2020/cpjexyptxf/1-17.%20Patri%28di%29ots.mp3',

        epic: 'https://downloads.khinsider.com/game-soundtracks/album/cyberpunk-2077-2020/1-09.%2520Scavengers.mp3',

        explore: 'https://vgmsite.com/soundtracks/cyberpunk-2077-2020/wxufojegbk/1-06.%20Cloudy%20Day.mp3',

        idle: 'https://vgmsite.com/soundtracks/cyberpunk-2077-2020/cmvnpuwufw/1-18.%20Mining%20Minds.mp3',

        // action: 'https://vgmsite.com/soundtracks/cyberpunk-2077-2020/lsjdmmdvkx/1-03.%20The%20Rebel%20Path.mp3',
        tactical: 'https://vgmsite.com/soundtracks/cyberpunk-2077-2020/jdinixihsm/1-11.%20There%27s%20Gonna%20Be%20A%20Parade%21.mp3',

        theme: 'https://github.com/bilo-io/vision-assets/raw/master/CDN/DEV/assets/audio/themesong-johnwick-wetwork.mp3',
      },
      executiveSummary: 'A game design document for Blade Gunner, an action/hack-n-slash shooter.',
      features: [
        'dashboard',
        'documents',
        'controls',
        'characters',
        'locations',
        'dialogues',
        'graphs',
        // AI
        'images',
        'videos',
        'sounds',
        'chats',
        // Experimental
        'sketches',
        'maps',
      ],
      id: 'blade-gunner',
      images: {
        coverImage: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXFxoXGBgXGBgXGBgXGBcaGhoXGBgYHSggGBolHRcaITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABFEAACAQIEAwUFBQUGBAcBAAABAhEAAwQSITEFQVEGEyJhcTKBkaGxFEJSwfAHI9Hh8TNDYnKColOys8IkRGNzkpOjFv/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAA5EQABAwIDBQYFAQcFAAAAAAABAAIRAyESMUEEUWFx8CKBkaGx0QUTweHxMhQVM0JyouJDUmKCkv/aAAwDAQACEQMRAD8A8duHzrsMJYE1zsKjAqiz7o68m1TcI4W+Kum1bgEAsxbQKoIlj5age/kJIGFw6edI1wicpKyMrQYleamN120oumDCnTgOAKscTh8LZuFS5vgaSu20E8hvManlNU2KZS7FZCyYB5A8vdU9rCs2Uge0YHLXy8h8qbcQZQZ1OYny6e/f5VMG0KrqRBNQzfLdplvzHGDOV1Db9dakqMAUpp5SQlzU2401wTWZ9abGk0ZQC5qSnhZI5a7nYeZ8q2PZ7sOMTEYq2yyFJRbmhObm6rPsN8utTLgM1nPDc7LFxSV6hxb9lbpbZsPd70gCFYBGJ1kKZjz5bV53jcC9pylxGRxurAqR7jy86aErKrH/AKTPW4oOkIp5WmxWhUSLT0tE8x6Tv6U2KN4fftKWF62XVlgFWyujcmU6g9CCIM+lA2WGaCApyNU161GqsGXrz943H0qFtSNNhr/GiCsQiLV0Vb4fFQsgkEDQjSD5VQ86nS75mna6FCpTDk6/irlwy7sx8yTHupsUpYVGz0E44BMdqiY09qYRSp0hpRXRSiginqajuNrTpppolABOV6IQSKEFEG+MigLDSxZsx8QMZQV2EQfWa0rYQuvetQg0+1eZWDDcGRIDD4EEH3iuW+wDDSGIJ8KzoZ0MSvuisSsAm5aaRTlNTXwsLlMystpENJ8MnfSDPnWKICGpwpCK4Cgsp7g/XrTRpTi/6NIWplipGfKNNddDRGEwrXsqJuW+ZBbXyGU0EzeGPOtn2ctILQui4BmKqc/4gTr5aaAz7tDUqtUsC7fhux09prYXmBed5tFvLrNeJcCEaAeG3C+JpLBTOn3VAYE9Z9ZznGHCtlAjRWn7wDBYB5Vq+LXWOW1bzgFwXJUhVAIBUsfaZj0mdBWT49/bMR7P3fQRE/CuegSTde18bbTYyWgBznAZC/ZMxA0GEE8h+pVbGnXdIpqrLAecUTj7QUiOQrqm6+bDeyXdyTBuOe5+VS4nDhdtjVerQauLBzLBGvX8qq24hc1SWnFogVOoJ1AMx1HSvUOyLYfBYjEpdu2hZe8ptRcQsVBuxKBiywCg1Ary++INEW0MdJqZbNitUGIZx0F7dxL9oGDtMUzXHIMEKjab7Haszxft1gcQGW/gnuiAFzZFKxOofNmU68qwFjDF5ltlLddqGI1iiWyoN2em3Id8mU7iItlybKsls7K7h2HkWCgH9amgWFFslE4l8P8AZ0VbTriFds9zvJtuhkgd2VlWGg0MaEmZ0MLqBVTW+7CdiWvA374uW7b2LrWcoSbgGVHYhwQEi5pprqQRANYZVq64F2iv4fwW7h7syGtMxyENo2k+Ekc1g+dSqteWwwjv69fEIkwE3gvZm9iLF+8g0sFFZecuSB8xVViLLI7o4hlYow6MrQfmK02C4hdRcb3ZXJiQS6DwlSWYgEFpA8ZAMncVneI3+8u3LkRndnjpmMx86LcRccWXX1lYPa4At66lCU5aaKcKdEpaSlroooJkVxFPUSa64NaywKjpIpxFcVoJlyimxTlpBWQSqtOCCkFF4bCO5hRWAWJi5QpFWPH+DvhbotuQSbaXARtlcT+Rq54d2Iu3BLOFHlqf1rW27acCwzNYuX7oQrhbSasFnJmHXfWqCmSFwVNvpNeADIvIA5Rfx1XjsVx1rQcVtYRdEJPMRsRtIPPaqJ4J8NIRC7KdTGJAPeo4pMtLlPQ1wU0FRIxrhRHdA67Vxw3Q1oWLgoCa1HZTiAgYcj+0dUmToHYbKNGMgAT+LmJFZl7BGpojhmKa1cDIxVtYI5EiJE89d+VTqMxNhdOx1jTqWyNjyP3hbYYq2bl1VNzKgZAyj2W19okw0CV0n2GP3qxOIv8AiJzFgdiVCTznKCYk1b8Q4m1zDZNBDZTE6gDQZTsNvhVVetAKpLcpjn5CpUhE9ZL0viFQ1XMLTJa2ZIgS62t7AXJJncIKdwPDZ7yg6ASxJ2gf1onidoG4wXSTlUe7Un5/CoeGYrK+c6Lz+oApDiZZ7h3M5R68/p8K6GNOOTlHXsvKrVWfswpsPaxSeUQPHPgM7oO5YjbXTUelPwmKhhM043QBtr1qB010YGRm0nSdY1A1H6mmiI3qBOKRoj8YocZh9DXG4AF11yjn5U50CopVwwYDrIaDK5RrBYEA/wCH31f8B4zcGBv4XNh0Q3RcY3c3fHQTbRQPEoybHm0Dyd2a5mnsTu/HXsZQHA2EvJ07q5/yz+VUwvCZjlVrwhSbgXObeYOvhEkyvs+I7EwPfVQl9o3j00FIqDM9dZFOU1reynZuxiATduNnn+zCkCJgsbkwdxpFWn7L+B2MRbutdtLcy3Bo24HdqZgHbetjxPD4OzacWVspdECFKh/aEiJmi5jsMpdn2qk6v8sgzIGkHTWTF7xBtErLdn+wFi4MQbrMQLrpbhiIVdJPUz9KyHafsw2FuQCWXcE7++vXeyd3Naun/wBZ/mFb/urNdvLqBhmYDwnmOlUDQWLz6m0VKe1ETN3CNLE5DSOELy205nXXSmNU7gTpTGWpRderNkOop4GtIK41kU40mbSumKaCSYAk9BqfhWWhT4RZJqB9z61fcE4Fduh/CyMMsKUOZ82b2QYJ25A1VX8LlMHkY86Kk2o1ziAcvaUKxg1xatt2TW0eH8TVlQ3Vt27lssqlhGacpInkNKzuN4DetC0zqAt4MyeIEwj5DI5GY08xWhBtZpe5hsR9RKqwNaQWzNaLg/Zq5ewmKxK3FVcMUzqZzEOYkcgBqfODWecHnQXSWuAk9Ze6cFynxDblR9jjLp7CgctdfSnYO1ahQ5HiBkk7GgNjoeehHlsfWjlkodmpYjxyV1Y4ji76v+8YwBl8Qtj2hKggjcGtF2xK3sNggYtraBUhiGugaDbMSZI03mQaxWIxEhRPUkx94mT86a1wZdzvGwHX+VbEYIKidnl7XttBOQ3iPxZEXsUhIUW0AAgG5mYxJOpHr0om0SbIyxo7iLcxqF16/GqWf5U4sdpIHrp8KzTHRVn0pj633+6NxVrRf8uvxNMt29N6htW10kUbbECABFFYWESqvanrdIphpy2yeRpFU8VI90wQadZugLBrvsjkEhTCiTpsAJk9KZYSdPdRBSkNIRl10YauQM2oCydh4jJAnegLlxdlT3liT8oFWGG4YXJBMfOpMVgwLuQmQI200IBGg51ItwiV1sr/ALQ/AIxcs+MmYjO0STllFVctNlzEaTG4mSJ235b0lognWNTRlxTluaggQf8AcBIoBfzp2ypVMM9k9SjGtIJliBEqQJ100oMttpGketGm6sKSCYIkAxI5ieUjSls4cNbuOAf3cFl09kmAc2m3PTpTOF1NtTsAEffn6WA71EAVCtKMDpAMkRlbXmupA6+E8t7ZsCwS3dzq3fKXgtnKkXHQhyYIPhn0M0R2ix4vYbDFrk3LYNpEhZFgaqSwAbQ6AN5nzrNjTXamMtMKNMio3FrJExGR6vwWp7NJmxC24JL518IUtsfZDQNvOqizwq4ZUhVIIWLjBTmLBYA56nWKj4ZxO5YupetwWQyMwkagjUAzt50Za4zm7zOvtmTlJj+0RzodxpzNZuHVI8VG3Zw6ukt4S7aBcAyCPHabUT5iGAOlH9lcLfxWOW2hzXXBzPcJaFA8TM25gR6mBQ3DrsXGy+ywKkMQuh8zpIjarXs5iruDxNnEr3ZhGDAvAZSDmBKgx1G+oFAAkwckDVNPtiMUW06y5TErT9qeC8RwCqtnFZrNwsAFC23z5ZIlpmQpIgjaK8/vYW5c8V27cLTB7wliDWq7YdqrnEe7ttFhEuFhGZszQwBLELECREfeqlGCCoV74kTOw3iNyfOi9hIhpSbNVax5ftDbmdIdczJLbGTpbms/cs5TEz50/IWXcALMDqdyKO4lhEQEhiTpuR6HQULh7f7vOYjOVjMM0gA6pMxrvEHUUozXU4zcDr8K0/8A5G59nw+Je9ZtW8QWhruZVQBSZZlB3ykAASTFUto2u8QkXHthhmXQXCsjMARMGJAqZrgIG5A2mYE9J2rjTW0Umh8EPO/K2f1Gh9VdcbbhyYnPhrTXcObIItM9xYuHQ5nktpo0AwdRNXPZztdhcLmQWmyuuZmQZR3gBgZdN9BIMVijS2kmaJOcW9VM7M14AeSQN5z58FruO9sbFzKbFh0uAgi6SqsAG2DqS2q6HXmayuIxjOZKqNT8CZA91Ck86STQDiAAnZs9NhJaMzP4RmD4hctC6EKxdt908rPhI5dDvrUWJxdy4FDuSEGRdtATJAioIrprSU4psDsQAnfF8o9LckU3FL0Xh31yL8d8AxAuZfZzgaGPzoTKOldS0E4ECBkEgpK4muLisimNuNt4129/lVo65Htg4q2Or2FaLQn/AAosnU+zPrVTcIMUdwsSygwCvjU5A2YzMNm0YabEHc07Hxblru7x9tIzUqzARiOQB0Go/pcfAc5FivFjbMFcXcvmf7xGWB1BZzQCyNwYMHUbjqJ5ab1YXuKXjcDHKrKy/wB1aWCjZhoEgQfLXnNWfFLmIx1t8disbYd0i2Lb3At9hO1qyiRl8RM6DehUdiM+v3JRotLGBp+n0a0eSoUo/DsMvOq6KkDGpkSrscGmSJVt2Txtm2798XAIjw6jfmCCD8K0eD7JNfdblgMts6k3giEid7dq2qiANYJE1juC5QwdgCFdCQROmbxaHTavZ+C8LVXN65cLicy5tFUAHX4GqtjDdeTthcyqHNMb/AZDLiSeQzlZjin7PLjIxTEB8qlsjK1qABuqiRP6mvOrKQa9X7YdrwUa1ZOhBDMNCw10HQV5RYOuulYwrbG6o9pLuCu8JeUbgjfdT5c4iqvid5WutEzIGmxgCjeIXiijcbagwSYOnpVHufPekcAbLp2UYT8wagj78CpCJDcgYHn1FDukUSu0fqYppUcyR7qWIVy8uMlRqfCRTUfRp5iPmDS+REeXuppG/wCv1vROSUZq24wT3WFVidLWxe40S34Lig29vukqY0jWhMI2g99HdoVI7lfEIsrCkXly5pOlu6Tk5ewSp3Ea1b9jeyX2y3nzlZvNa35i0LgkZdt+dVqfxCOsguDZ3hmytcZgyfFxI8R9lRYayrMcw/LYeVF8Q4VaW7dRGeFzldC2ikQJ9CdfKtDxPsVcsPpdtkgqDow0ZHMgE/4CNTVBdxkszFCC1s7RzQfregAIuj84vuw6eyhucLuJIRgx+Ejbntp9aAd3UDQiII0+B+taHCrdxd5Vt5ZbOfE0AAZNTEmBmBgAnfQ1Nhey+Jc+HKoUqpa5mVczKuxAIK+OZ0J6VMBdlSq0kBugHAzr5rNHFM+5/rrRWFdrjHLJJMkDYjwDX4j40Txngl3DFhcTTPk7xYZGaA3hb0aeVBW7CmSCQVGcR15+6KKk4jDb3Rd3DGSbiQpM5lUr9/YHVflNH9nuyV7HXLqYbLltlcxuPljNmgeFdfZPwqDF4vEpZNssShVpUmd16nXaq/B4i4rPkd1k65HKTBMTG+9Bt7rVKdVjHNtitBk5WtBBi2sa8Fur/wCye9bAZ8TYWOp08t6zHFOBCz/5nDN/lcn6A0RgFuXcPc0uX2F5IUs7s0iAoGpOsaCs/fViTmGvPSDPpyohwMhRFLaAQXVLR/tb6wD5BJc01kH0pcHYuXWyWrdy65mFtqXYwJMBQToBU3EL7XXNxlRSQohEW2ui5QQq6TpqetHdkMFeu4uzbsXXs3XzhHRipB7tzvOimIPkTvQe6GkhdQzVfjOF4i0ivcsXLasxUFlIlgASsHWYINA5q03avBX7Si1iEuNcN1yb7XLzB2SEdVW5o33G7wDUED0EtYC5jCtvC4NQ9u14hZLFngqpuN3jmWlgIX8Wx5TpPLmBx8suuatWY1ry1uXXXkqMsaST1oizgrjOLaoxuMwQJHiLTGWDsZoi7wXEreXDtYuLeYwttlIZpMDIDvqDrtpVYKliExKr6bFbFv2Z8TDW1NgS/R0IQ6T3hB8G9ZfEYYo7Iw8SFkYCDDKcpg89RSgg5KjmOaJIQ4tjnUq93+En1NKFFOXzFNCkTKiuEEezHpUgsELPSI9/9a66JBgVJhtVI8vzoLEmJ4odiSZJJJ5mtN2XNlbN8FbNzFXTbtWLV6wbshyVZ7blglpxm3b8IqtxvDwlu08+2XEdDbuMhHwg0L3EnSsRNkKdZhvmLjwPuEVxTgtyxeuWbi5XtmGEgxoCNQSDII586hGFoizb11JJJmTrJ51Lc32o5AStizdoqnBnwv6D5MK9GXGs/C7TDSGFs67wND8q84wmz/5fzrdlu64TZB0Ny4zgdQJE+m3xpqa5drbMcws1euEzJ3qlw9WmaqbNAMeVKVei2xRfE70vHIfU70GrazTnkrm+PrSi1KZgP1NJiXY2iQMI0E/dFsgDhRJ23iSdiRtznfpTeKLlbKCPdtIJGnkQAffUOBxAz5nOoECobt0sSev0oBxJgqjqdNrMbTck24Df16J96+DBiDzjY+YHKuGuw5aktpOp8oOmi/WaHe2RRGHcKVZlzCdRMH4jUbyDET1ginmc1yxA7PXmEbxE5shndF8JXJlA5D7pXmCInWQDV12R7RHCrlKk5b/eRJHiNk2iCvox99Z3FS2YksdZkmZkAnTrMkmdZp2C2b1WiXdolROzj5LWO9vSB5LTcb7TXb9wn2QcmnoXj/nNUKNBHpH+2Kmb0/D8A38/lSNb8BMaz8Na2Iys2m1jYAWu/Znj1TEWUIlme4o6gPYtHnymwPjXoltLUsMqmDOwMkC8J/8AyPwrynhOLa1gUuI4R7fELbByBpOGaJLfdGVtDpqamPai9ZvMoexcynL+5T920i8Bl7qJA78wOoHShKlU2UzLes16Z2qwCNhcToM3dXWHkwstBjb7leK4fc7eyfkDzrXP2tuAlWwdxhctkBFN8aNae34ReDgjxk6DkYMVS41UAZ7WGxFs23a1cF17ZVGbOVTMACGARpkfdO0UQUWUS1pn29beagxGK7wLmUAKmWE0kBYzNrq3U84oB7IzwJ1WdfXy06Uj46N8voGDfTT50gx2ZgQAWiAACSfKAa1gqhj3Sfr16rZdgbKm4Lb5gGu2zKsysCJiCpBBmNRUvbfs1atXM1qQGklZJg6zqddTWPt8buoSUZVYEEwTOZTOhg6g1Fie0eIvH95dc8wNTJPkCKzS0SN/tCR9Cq9zXAwAIPG5P1RTYTT9b1p+F9lbbcPONW/3F609z70ZgqqyhNQVfU6yf4YW/iyYzAkensyN99fQ+6N6PwuGwa4W41y3duXm0svbuAWwSDPeZhOhg5QJOu29TfiI7KuKUHtFafGpbxGEwsYw3cQHuhrT3FcoHcHMPvLMCSSaIxXZ/htlbmfilvv0zFBbkAMLZy8iQ3eRqDsOuowvBMWlks/3oOXyoDviSWJ8TEkmJ1O/9algdJAMC+Ua33aLpdTaKbSTLjn3b+J3cFdYqzbV1CXrTkhTIYqAxiVLNEEHQnapccmIJW2zFzZLBNQ+XxSYcTIzazJHSn4zjS3+4d7QDogt3SgjvVSAlyMulzKMpOoOUHllozCoHfENZVxAzpbzZvDOqtAEnUGQBtXUxxyMx1plK4NohnaH4nj5eavOK8Y7lMNcwOKeQc11GNwZmtNNs3EJICxMw5zTyisrdx+f7Qbliy1zEObgueJWtOXLHuwGjKZPhPlvFXOEwaXbOYCG5g7/AMx5+dOXgi6Sdv61OmxoBAVdr2x7nA1MyJPflbRE9kuEYQW7ne3szXFyMpVEAE7K7gkHzWOXSqjtBYsK0Wriso2BbP8AMCjH4Og6t7if4UBjcPkIUJkJ1GgGh0qq8wGX4sRPh15KlvOYIGxHSKgwo02o++jAkE+VC4Xb0P5igV3MIiyt+KurWAoZSUxN+AN8lwWnBjpOce6gmwzoASpAZAQeRB8/jpRYwoe9l5EGPhI+lNUMBlklc2gO0+Q99FclECmwMad5v/yJPqnYLCEhmA0HOnNhWEHMniGbS4pieTQdG02OtXFq8PsxtBN2BLdNCFHkN/Wh0w4ilbJJJXRtFRjQ1ovaTfU+ywSuRsTRmI4tedURrjMtsZUBOir0HQU23hQSRMaE1EtkdYpASu54CT7U/wCL6VETU4w4/F8qbYSWjz6UUGgEwEThjCuhGkemvL3THwofDYkpmG4OjCjVWCwE+zoYiPOaj43lNwsi5QwGkQJgTHv+tQtMEZr0JcKYqNddvZ7ji4QRw3OiNBDgcD3pIDAGJA67/Db51C2hI2iQfXapOG3Crhhp5+mo+YGlMxF0kljuSSfU1QTiXM5rPlNIsZI4EWvwN45cZJgJNaXgHZ8YmzffOEe1a7xQ2zQSxDc9V2I6VnVGsb8vea9EwqmxwzEMVK99ltoYM3LbDu1Zddu7FxtvPY1VjQXAHf8AQk+QK4toe5tJ5Znht/U5zWN1H8zwTnYZHJYEXPDAEf1mn4W9EjrFRunMDrXWkJ+vupFc3Vh9qU7z/ORHu0NF4K7achGuBA7qCzTCguJYkDYDX41W/ZH/AD+FTYXh1xnVQVBJCyTAHKTpt/CtJQwNOquOLYizbw13C2277O9q53itmQPbN1SyzbB8SOvPQHXWQAeEY97ZFwXLiPbg2sioYII3zbfA61o7PYK/37WXuWmKqGJti7cUjOyfcSQZtk6x7Q912nYe0tk2mds5M95kCqBMxluMp29KhUqgGF6uzfDzUEuFrx6AT7rB8S7S4m89t3vXM1tQoYvqImMvdquUa+frVZednJLuzEnMSZbMxmWbMdW1Oup1Nekp2IwqjxYxh5A4VPn9oJ+VOTs/wtfbxEjzxAH/AE7b0BtDdxT/ALpqgxIngfsF5qbX+Fvp08qVRGwj/Vr7jXpf2Tgi/ftN5G5euH5WFFTpj+Cr/d2v/pvN9cSJ+FD585DrwVf3WG/xHR/1/wAgvMVZ9ht8dPPrUqWrvJSPRQPyr0xe1nDreiWhHlh7Y/6huVa8N7UYK4si5atGfZcWlb1i1gzHuNA13bvGU1P4bTdZrsXARPhdeTXMFecQUeP9R+WaDTDg7ttjktOB0bxSv4WEAH4cvdXunD+MLdB7q8XCxOR70Cdv72z0NTtjCdO9PobpPyOOY/FaHzXjKFQ/D9mmHh87ifph+nJeAY2yCBlt3FPMbpsPZmSNZ0JO+9CXbhQmFWNtR/PSvoa3hy33c3+gPPlrh7teX/tW4N3V5LoQotxYgoyDMu8A2rQ2g6L9adtc4oK5K3w9gplzJ77+2WeVlie+b/Cm40iY2O5nrpzoi7jUVj3PfIBoG7wB8u3iCKBr+EHSdzE1WkVPaZZBKyBqRMTPKdx/KunFK8d7Rkct2itlxrtaARiMvMHxacxOvMf0q1w3bS7mAazZJOVZClJ2GbQxmPMgD0rM95kECQrmYB1Vl2IPlOk9T0mpe8DDM4LL/wAS3AcEf8QHQnpMHzNENgWU65FUj5oBFhusMh6/da4ds8tzI+GVtl0crDMNDqvLQwTQvHe11m81preHdAqwxa4rFhMggBR5/oVnsVbzsLneq4zjVl7s6HoKHwItTNxS2ikAHKJETJ89RpRBIF1F2y7OXu+U0xpMzEnwMdaLY9obdp71y5YEWrjl7e0ZWM8ifOs1Yt+0Oh+n9Kl4RfAOUGFJAiT7R++J210In7wjyseHYZTcuBtR6xzo6KMGmS0+3kpbP9rbYcwPpFLaQknTnP8AH8qNvLaUgqTIjnM03vhv+v1p8qIK45JyGkeZ91bJimJu+FB30SAoVVIIIKKDCnTfzPWm27EDca60FaxCirC3iEitMZJSx7rlear+dPFyKcwqJhUWlfRVWhSWGpRd8U8qhVqXXcenxn+Hzp1yxDpClunc+c0PjBmEjmYqUyecUuCwhLZuSjX1pKlhO5dWxBz3mkL4/Ua+EoH2SBUTHX0qXEPmuE8pim3lg0G8U1W8xkDAS4K1mYDeOR+A+ZFb3t05s4XCYUuHKg3my6QAgVBrqR4n18qoOwuG/wDF2nYSqkuRBMqkTmgGFkjWDqKk7c8R77GXmmQh7pdSfYJnUx4cxerU9Tujz+wK4a8uLGZtLi43H+mAAI3h1QGdwi91WYF/BHmam5qekj5VBhxAHu+lOa5t60qP80q2sYrxLOwn8qcHBZifP5iq0XtqMwbZjEan6aVkrWbld8Hx4w1tr2QOsCQe730GneI45xt76g4j24vuw7hTZEbAISSdjpbWNOQFEWLaMptEKyGMwJI58o2O1ZLH4lrdy4ikhVdlWdTlDEAEnfSKnUoNkP3r0tl+I1Wh2zz+mSMuWfNdjeJXr7Z7jvcY6S2pgbD012oS7cKkg6EfnH9aiW8eRj00+VNu3Sxk6nrQiEDULjJR32W5yE+knl6Uy9ZdRmI09KQcVvAAB4A2ED8xUV3F3GEMxI93I01lFpqg3hSWXO4I5/rcVJcVhoGBHUHnr79hMmgiNJ8/hAH8T8KaGoQqF0q2S5kWVuw07A6AfWfdUAx1zTxHX/EZoATR2DsyWbkKVzRmuihWqlwYHGOcR4Ka5xNxoHb4/wA6Hu4520d2YcgSTB60HcbU0k1gwDRCrtdWoMLnuI3EmE9vKiMMnhL8g6L8Vc/9lCTVnwvHKi3EdAwbKdysFUuIDpy/emQeQqgXG5CudCOQOb3HT86kS0BDJchto2/lHl9ajKwSDoCOZB5iNRv6jQzUyYVYnXQa+MESNz4EMA66TPrTBTcYH49CoGbfTXnHXqKL4YLUMXzlgUyqkDMAwzgsdVJWYI6UHcdBMLvtBIjnz1Pvptu9E6DURqJ5zp0Om9aUYsrHFOoukoPBmlRzAiTJ6hulWTYpROSZNVQv54VFIRd5OYnXMAxAAOvkPkAJGvfrSqNFlGo0E8kZ9qadakS41V/2gdfnRmAvI2Zmu20CCfEHbOR90BVMzHOBrRDQpOECY8vZWxwzpbDPILaqCCJU/eBO4pgnrQPEeP3MRcN262ZoA2gBVEBVUaAeQqEY41jhSCm8ZoK6KiNK7aVFcvxtXM1exUuUtcWAqHPUZenlcxaUS12ibGNyoUA3/U1WSelKWNYwc0WYmGWmCmYlYOlS4ozEcx9aa4JX0ovhuBa8yokTB3IGoMAa+ZFJqrn9JjWCOcxHibLZ9ilGGwt/GNJ/duFMeDwRALbZmdhC+U8oOCZidSdTqT1J3NbXtrf7jC2cEDu3enU62wITMDsWbM2nlqaxTjarkQwDvPfl/aGrgYTUqvqTazG8mTO7Ooajr3upTiKTvz0qEU6anKvhCm75uoqy4SGaWLRAjkPpVQBRlnEEKV0E85pXgkQF0bK6lTqYqgsJ8dFIrSSc51PWheJEZjG2/wAv61LYVZHP3U/iC5l9gjL978tgP6UTc2SAkNJ3qrDVMiSrMBosTr+IwIoaK6KCWVMrDXQafPWnWxNQCno5AgVllOPLT9fKm3LzHck+pJ+tRMTTYNMhZS97Uy4shMo086Fg04Wj0oESnbULZjWyadaQipBYamd0ayVNmpLVyPQ6HzHSm90al+znf9a1kFNfvcxlBIAhdgo0EySZMTr1qA32qa3gyR1/X8qe1iPKIpoKWQgis12SpGBpFHlPlQhFdlp1vcTtUjMNuQmDAk+pFQEa1kJRedYMDWmF9APjUcxp1ptZABSh6fnqAU+ayMIz7Ix5VxwZieX68qYCTpJ6flTXtnz8+lRC9R0HIef2TnwoG7L8dqiKjqD8f4U4WGOwLA7EbfGlODI3yr6tr8BJp+9QN8m+vrkhmI6UkUQEXm5P+VfpmIppuINkPqzT8lAoypFg1IHn6SusMBM1tf2e8OCgXrohWYQddFhydiCD4SZ6RWMw6G9cS2ABmMaADTmSdzAk+6tZx7GizhgqEeOVQa5ltlUBbRtNEA25+6q0miZPfy19u9ce2VnBop089Dl2ieybZ4SC8b8BmxvmO0nETiMS9yfDOVNdra6L/H30Gy7TUCb1OzyaBcXEuOqanTZSphjcmgAcglFunFaUGu60EZXZRUtsCdqiG1S7RWQVnw3UmNP50DxW+znKJImT5kaCjeFkDOT5fnQN8XkEtmRSSBm8MjU6A7jz2oF5uF0s2dmFriDNzl3IWzw5j1Ao5OFqPaY6mI1/hQ13HPPtkiPL+lRd8+hOaCDHIH0Ma6ipXK6AaNMwWzz+xVoOH2R+P3kUsYcfc/3VS3bkscuaOQJ1+XnUZmt8s7ynO1saYbTb4A+oV+b2H0lVHoS1NuXrA2VfnVRZNLi1g6EUMAnM+KY7W4skNb/5HtHkjDiU6LUbXwdtKrya4VQNC5HV3usrS3dUKQdzt7xUFuOo99CHWnIPOtEJHvLgAdFa2raEgFhrpAB+sUYqW1aAJ6eA+gJkjn9PjT2LwBHP4D5c6Jv42eWhMxB+VODdQcAW8ZRzkRmGgHMCddpJ5E/nQmISBJ+UT7wNt+dNbFoQBlCkPyMggjcqTuDEGOs8oEvXJp5Ug0plw1HmprtTJpFYBOmnqwpHUa+76UyginFq4Go5pZoLKTNShqimnXFiPMA1llariLQ2tF//AHHaPhbCx8amPGXHsC2mkeG2gP8A82Bf586WupF24yAhb+Od/adm9WJ5eZ+XnQrXNDFdXUUr3uJuVGz1E7V1dTBQcVa8BbKS41IERE+DSeRgEaUPxzHm7dJ5DQCurqcnswufCDUxagetvQKvQ08UldS6KmqlDGlzGurqCxXZzTwxrq6igjkaEI612cM5dlBPnJ2+mgrq6lGS6HPNm6QPr7lTYg23gsnj5nO2vu5D06UF3iIZVdeUzpvpoR1Pxrq6slf1p6IRVE7VMEFLXVnI01y2wJ03pl8A8o+NJXUoVKgAbZDxUlpRS11MVBualFsUnd6x+Rrq6i1aon92Ndvj/Gke0BzHPaeR8xXV1MpJ16PPbURrMfx1qBzXV1ZYKNq4KeldXUEy5lNI4j4fPpSV1ZZJTa6uoIrqdcbb0FdXVkCv/9k=',
        slides: [
          'https://cdna.artstation.com/p/assets/images/images/067/857/984/large/dreams-in-frames-dreamsinframes1986-cyber-shadow-clayton-crain-379e2086-4a50-4f83-aa85-cc4cd057ce29.jpg?1696403849',
          'https://i.pinimg.com/564x/56/73/8d/56738d6a2b19c8c19b223eeba74f5ca8.jpg',
          'https://i.pinimg.com/564x/fc/cf/62/fccf625d8c6392f8c9fb87e7c2015f2c.jpg',
          'https://i.pinimg.com/564x/44/02/9d/44029d76e554e4a6b66da5ae149cc714.jpg',
          'https://i.pinimg.com/564x/49/98/5a/49985a9b93da93a279f87a25c048a443.jpg',
          'https://i.pinimg.com/564x/37/c3/81/37c38149def665ddf32e8349a05a1e27.jpg',
          'https://i.pinimg.com/564x/0e/b9/16/0eb916c72b8f9ce5b6a07ee2456aca47.jpg',
          'https://i.pinimg.com/564x/1d/dd/f4/1dddf46c02612429fb67cc566b589ad1.jpg',
          'https://i.pinimg.com/564x/10/86/45/108645f25d6b63986e29ef48c959bef2.jpg',
          'https://i.pinimg.com/564x/8d/20/b4/8d20b4e91580fddd112866bd3b21c51d.jpg',
          'https://i.pinimg.com/564x/2a/20/82/2a208207705e48e666c8e3f1d91d11ed.jpg',
          'https://cdnb.artstation.com/p/assets/images/images/044/054/203/large/yin-zhen-chu-ninjacharacter.jpg?1638972568',
          'https://cdna.artstation.com/p/assets/images/images/044/054/228/large/yin-zhen-chu-ninjacharacter0705.jpg?1638973962',
          'https://i.pinimg.com/564x/af/ae/8c/afae8cbd67deb438792fcf61c9680498.jpg',
          'https://i.pinimg.com/564x/fe/b1/5e/feb15ed16d92ca73a7a6e02e137d424d.jpg',
          'https://i.pinimg.com/564x/ad/c5/f7/adc5f706dcf363ae0782b7ef7d380e5f.jpg',
          'https://i.pinimg.com/564x/ba/c0/4a/bac04a0ac9d283263f57a71beab1bda6.jpg',
          'https://i.pinimg.com/564x/ca/55/98/ca5598fbfd4240392a77aeda7f409d99.jpg',
          'https://cdnb.artstation.com/p/assets/images/images/028/460/367/large/benedick-bana-trail2.jpg?1594556347',
          'https://i.pinimg.com/564x/f3/a2/94/f3a2941c19a40353cd1ccfbe4f79b075.jpg',
          'https://cdna.artstation.com/p/assets/images/images/051/471/650/large/ks-8.jpg?1657380143',
          'https://i.pinimg.com/564x/43/dc/2e/43dc2edb14042343c2950fa4e2c544f4.jpg',
          'https://i.pinimg.com/564x/fe/fc/3a/fefc3a6d729c9e5f2ee46862a782dcd0.jpg',
          'https://i.pinimg.com/564x/6f/d8/2c/6fd82c89ef62326da3c2a03822f6e96e.jpg',
          'https://i.pinimg.com/564x/8c/f7/af/8cf7af7625b3e4f52c6064a546dd07d9.jpg',
          'https://i.pinimg.com/564x/42/d0/8c/42d08c7a36ea301b1ff397d785221698.jpg',
          'https://i.pinimg.com/564x/f3/d9/fc/f3d9fc961fddcb4972ae9087a2ea26ba.jpg',
          'https://i.pinimg.com/564x/dd/7b/a2/dd7ba203e67d13f9c20b1ba5525e1f43.jpg',
          'https://i.pinimg.com/564x/1e/26/dd/1e26dd851aa8888e95baed0d2b130e8c.jpg',
          'https://cdna.artstation.com/p/assets/images/images/040/619/690/large/dario-jelusic-cyber-4.jpg?1629391200',
          'https://cdnb.artstation.com/p/assets/images/images/019/624/267/large/eddy-shinjuku-cyber-light-final1-artstation2.jpg?1611205577',
          'https://c.wallhere.com/photos/b2/29/anime_girls_sword_white_hair_original_characters_cyberpunk-311932.jpg!d',
          'https://static.displate.com/857x1200/displate/2023-05-02/3ac607931916272a4eeff55971857dcf_ce22a619d1bef956ce01096f50858667.jpg',
          'https://i.pinimg.com/564x/fe/9f/ce/fe9fcedb61b9418dc1a4a81730525a66.jpg',
          'https://i.pinimg.com/564x/30/68/d5/3068d519b828071e1ee778046e9a2ca8.jpg',
          '',
        ],

        thumbAlign: 'center',

        // thumbImage: 'https://rare-gallery.com/thumbnail/1396954-Cyberpunk-2077-Video-Game-Car-Samurai-Katana.jpg',
        thumbImage: 'https://i.pinimg.com/564x/49/98/5a/49985a9b93da93a279f87a25c048a443.jpg',
        titleImage: 'https://i.imgur.com/MC6rAFv.png',
      },
      name: 'Blade Gunner',
    },
    {
      audio: {
        // theme: 'https://firebasestorage.googleapis.com/v0/b/vision-io.appspot.com/o/files%2Faudio%2Fffxviost-menu-theme?.mp3?alt=media',
        action: 'https://vgmsite.com/soundtracks/marvel-s-spider-man-miles-morales-original-video-game-soundtrack/bmojqztiqp/02.%20Rhino%20Rampage.mp3',

        epic: 'https://vgmsite.com/soundtracks/marvel-s-spider-man-miles-morales-original-video-game-soundtrack/ryaixfwjgw/11.%20All%20In.mp3',
        explore: 'https://vgmsite.com/soundtracks/marvel-s-spider-man-miles-morales-original-video-game-soundtrack/kwtawubpbs/03.%20New%20York%27s%20Only%20Spider-Man.mp3',
        tactical: 'https://vgmsite.com/soundtracks/marvel-s-spider-man-miles-morales-original-video-game-soundtrack/kqifoqwmgt/10.%20On%20the%20Case.mp3',
        theme: 'https://vgmsite.com/soundtracks/assassin-s-creed-revelations-original-game-soundtrack-the-complete-recordings/alhacdobdn/1-01.%20Assassins%20Creed%20theme?.mp3',
      },
      executiveSummary: 'A story about lost members of a dying clan, the Clan of the Sword, protecting their Dynasty from extinction.',
      features: [
        'dashboard',
        'documents',
        'controls',
        'characters',
        'locations',
        // 'images',
        // 'videos',
        // 'sounds',
        'dialogues',
        'graphs'
      ],
      id: 'blade-dynasty',
      images: {
        coverImage: 'https://i.pinimg.com/564x/e6/c8/7f/e6c87f5a053d5e407554f981b07fbb8e.jpg',
        slides: [
          'https://i.pinimg.com/564x/13/0d/ee/130deec1fac146ad977c4f0747310118.jpg',
          'https://i.pinimg.com/564x/da/cd/2d/dacd2d39a89073b3a4a278a116463014.jpg',
          'https://i.pinimg.com/564x/58/06/1b/58061bc7b02fc75f7d084291448d53df.jpg',
          'https://i.pinimg.com/736x/05/15/f4/0515f404e7e5ad0d88ff0c002da50555.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6DCN134ZyaQ7L6U6qvMPOTIAxH-kKyzirsgPFACiE1Motiry1Aq36YjzEh_RTj7wRhE&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAsAJzfuDGb9U2kX1v2a76LC-3ihscOYCXEngkVUkP3hv0G7xjVAnpCJRBaIbA1iEaqg&usqp=CAU',
          'https://c.wallhere.com/photos/40/fe/digital_art_cyberpunk_science_fiction_cyber_city_japanese_sword_katana_white_hair_cyborg-1933363.jpg!d',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQKPX14sKUh9Fxf0JDz22NraNhdKPdjaJZmFEe51tiVyL66sW-oH9UyggrViEWVi7sUk&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwN78Ft1cPRB4U9ydTGPYJm71sQBLTF7nlZzTKOs6xKJX0FesqCU4-vueyMgsZTA8Kklo&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQinyeI5VPwhUGTMa4YzOjHuT0rcnON5u8K3DIEdr4LQ9s8jIZ9TaECeWfy3YGW82hSw&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuHXUhNwXHiHs7iLhxF5FRRtBaWSgq2bra_o5Qe_L1-zqPTktMbFIWKMDi7LtEw7WO3k&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5r_T9VaepTKDgzeCacN0F7c_eVAsFoEPDuyG2pOik0ht5Dn27nvPLBOrTwMb3LQfHU8&usqp=CAU',
          'https://c4.wallpaperflare.com/wallpaper/815/166/430/women-artwork-warrior-sword-wallpaper-preview.jpg',
          'https://i.pinimg.com/736x/26/18/e5/2618e55ddff68d896c3d5229027d1d2b.jpg',
          'https://i.pinimg.com/564x/e9/d4/66/e9d4668d9e1cca16c4fbfa23047b9a69.jpg',
          'https://i.pinimg.com/564x/da/6e/c6/da6ec65094589ee1872ee24780e34264.jpg',
          'https://i.pinimg.com/564x/48/23/6f/48236fe4413508611b478b7f5ece871f.jpg',
          'https://i.pinimg.com/564x/91/58/d9/9158d9eb9e39c29c0c07a84a2ff71b6d.jpg',
          'https://i.pinimg.com/564x/0b/14/2b/0b142b7027f4132456bb3a3afdc45ad8.jpg',
          'https://i.pinimg.com/564x/47/9f/81/479f81be05786bb2175445d3c8de46c4.jpg',
          'https://i.pinimg.com/564x/d7/84/af/d784afa082161228e24233aff71e65a4.jpg',
          'https://i.pinimg.com/564x/f7/53/65/f75365ee4d306afe4168e8bc87c10ac6.jpg',
          'https://i.pinimg.com/564x/d0/a2/6e/d0a26e5402467e367f8c9187bd3d8c99.jpg',
          'https://i.pinimg.com/564x/ba/57/3f/ba573fbb876823a290ee73020a6c1dca.jpg',
          'https://i.pinimg.com/564x/56/28/97/56289725625005a376f44a4459436b9e.jpg',
          'https://i.pinimg.com/564x/2e/7d/f2/2e7df2ca21c7ef9dd3b926cf0f710405.jpg',
          'https://i.pinimg.com/564x/22/9c/eb/229ceb04811c9265e121745301839806.jpg'
        ],
        thumbAlign: 'top',
        thumbImage: 'https://i.pinimg.com/564x/a2/93/1b/a2931baaa72ab30bc890295a36a7953a.jpg',
        titleImage: 'https://i.imgur.com/iVkNH0f.png',
      },
      name: 'Blade Dynasty',
    },
    {
      audio: {
        theme: 'https://github.com/bilo-io/vision-assets/raw/master/CDN/DEV/assets/audio/themesong-dmc-vergil.mp3'
      },
      executiveSummary: 'The continuation of DMC 5, finds Nero seeking his father and Uncle in the underworld, encountering an unexpected reunion.',
      features: [
        'dashboard',
        'documents',
        'controls',
        'characters',
        'locations',
        'images',
        'videos',
        'sounds',
        'dialogues',
        'graphs'
      ],
      id: 'dmc6',
      images: {
        coverImage: 'https://e0.pxfuel.com/wallpapers/21/563/desktop-wallpaper-sword-demons-nero-dante-devil-may-cry-sparda-virgil-devil-may-cry-4-special-edition-nelo-angelo-devil-hunter-gilver-tony-redgrave-the-dark-angel-son-of-sparda-the-son-of-dante-and-vergil.jpg',
        slides: [
          'https://cdn.midjourney.com/7854e19f-5678-4193-b30c-f45f02e26c94/grid_0_640_N.webp',
          'https://images7.alphacoders.com/115/1150436.jpg',
          'https://ih1.redbubble.net/image.5129283134.3967/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
          'https://external-preview.redd.it/still-wished-my-controller-worked-i-like-this-pvp-v0-DPBZtzOn7-KrzeZkKY6XE8mYYdL4C9XHVgqvGLVI3GM.png?width=640&crop=smart&format=pjpg&auto=webp&s=f10b76fcc4769459dd4ed7df1803cd4d748d7c08',
          'https://preview.redd.it/sj8xw3ig12651.png?auto=webp&s=0ebddea916d0d390b9c6999b05ed0ec869af93c6',
          'https://img2.safereactor.cc/pics/post/full/Nero-(DMC)-Devil-May-Cry-5-Devil-May-Cry-4818873.jpeg',
          'https://img2.safereactor.cc/pics/post/full/Devil-May-Cry-5-Devil-May-Cry-%D0%98%D0%B3%D1%80%D1%8B-4673126.jpeg',
          'https://rare-gallery.com/uploads/posts/318777-Devil-May-Cry-5-Vergil-Katana-4K.jpg',
          'https://i.pinimg.com/originals/f6/85/fd/f685fd6c032af5b29a199da703c13f15.jpg',
          'https://i.redd.it/se2jn8rfkxs21.jpg',
          'https://c.wallhere.com/photos/9f/11/DmC_Devil_May_Cry_Vergil-1975207.jpg!d',
          'https://wallpapercave.com/wp/wp7065920.jpg',
          'https://wallpapercave.com/wp/wp5709621.jpg',
          'https://cdnb.artstation.com/p/assets/images/images/001/456/063/large/lacewingedsaby-the-dark-knight-sparda-by-lacewingedsaby-d8gkgfu.jpg?1446735303',
          'https://i.kym-cdn.com/photos/images/original/002/406/079/bcb.jpg',
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2aff4c7b-98fb-4e2d-8683-c9ae8ae79eb1/dfjkawq-deedc0c8-c1b4-45c0-aca6-cdd8b6332bfc.png/v1/fill/w_1089,h_734,q_70,strp/vergil_versus_dante__devil_may_cry__by_sethlansking_dfjkawq-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODYzIiwicGF0aCI6IlwvZlwvMmFmZjRjN2ItOThmYi00ZTJkLTg2ODMtYzlhZThhZTc5ZWIxXC9kZmprYXdxLWRlZWRjMGM4LWMxYjQtNDVjMC1hY2E2LWNkZDhiNjMzMmJmYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.t0U9UlBTcUDQjHYzH5xt1Y3KisU_3LZRIlUk3nlKX6w',
          'https://ih1.redbubble.net/image.5129283134.3967/raf,360x360,075,t,fafafa:ca443f4786.jpg',
          'https://i.pinimg.com/736x/38/39/39/383939173c3b35a8031287669f21e7e5.jpg',
          'https://i.pinimg.com/736x/13/7e/66/137e668da3d17e7da179013945fc6bb3.jpg',
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f289150-5829-4582-a208-83c4902389b2/dg8wofs-4edc4c3b-dbe2-4450-a499-883c6762f295.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdmMjg5MTUwLTU4MjktNDU4Mi1hMjA4LTgzYzQ5MDIzODliMlwvZGc4d29mcy00ZWRjNGMzYi1kYmUyLTQ0NTAtYTQ5OS04ODNjNjc2MmYyOTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.etleQ8nawcFKpLCF3dTQWmXhYus04w7F-wI-a_6WCeE',
          'https://static.zerochan.net/Nero.%28Devil.May.Cry%29.full.306692.jpg',
          'https://i.pinimg.com/736x/08/d4/5e/08d45eb65010585182adcfc4126696c1.jpg'
        ],
        thumbAlign: 'top',
        thumbImage: 'https://images2.alphacoders.com/115/1150434.jpg',
        titleImage: 'https://vgboxart.com/resources/logo/15993_devil-may-cry-5-prev.png',
      },
      name: 'DMC6: Sons of Sparda',
    }
  ];

  const index = 3;

  log('seedProject: creating => ', data?.[index]);

  createDocument({
    data: {
      data: data?.[index],
      name: data?.[index].name
    },
    projectId: 'all',
    //data[index].id as string,
    slice: 'projects',

    workspaceId: userId?.toString() as string,
  });
};

export const seedCharacter = (userId: string, projectId: string): void => {
  const characters: ICharacter[] = [
    {
      background: {
        // Ice elementals may communicate through elemental means rather than conventional languages
        education: 'not applicable, due to the overwhelming powers of their nature',

        language: 'English, Elder Tongue',

        nationality: 'Vitruvian',
        occupation: 'Oldest family of Vampires',
        // Enceladus' primary role is to protect his realm from threats, making him a guardian or protector
      },
      demographics: {
        age: 'Eternal',
        gender: 'FEMALE', // As an elemental, gender might not apply
        sexuality: 'ASEXUAL', // Similarly, sexuality might not apply
      },
      galleryId: 'Vampires',
      id: 'valerians',
      identity: {
        ethnicity: 'Vampire',
        genderIdentity: 'None',
        pronouns: 'None',
        religion: 'Crimson Court',
        // Ice elementals may not have specific racial backgrounds, but they may identify with their elemental origins
        // Enceladus is dedicated to protecting his realm, so he may have a spiritual affiliation with this role
        // Other details such as sexual orientation may not apply to an elemental being
      },
      images: [
        'https://i.pinimg.com/564x/48/54/67/4854674ea4e6a958134be04d019ee222.jpg',
        'https://i.pinimg.com/564x/56/73/8d/56738d6a2b19c8c19b223eeba74f5ca8.jpg',
        'https://i.pinimg.com/564x/fc/cf/62/fccf625d8c6392f8c9fb87e7c2015f2c.jpg',
        'https://i.pinimg.com/736x/47/60/15/476015b068bf1d0da7bab3b5a8514d85.jpg',
        'https://i.pinimg.com/564x/af/8e/fc/af8efce6f3c4cf797e8792a8e25c0752.jpg',
        'https://i.pinimg.com/564x/cc/0e/2c/cc0e2c3551497eeaacde7a1ff7026749.jpg',
        'https://i.pinimg.com/564x/29/e5/41/29e5418a267703555b2baeaac36f6bb1.jpg',
        'https://i.pinimg.com/564x/4e/7e/5a/4e7e5ad4bcba758b57e37cde3ebbcb28.jpg',
        'https://i.pinimg.com/564x/05/35/2e/05352ef1c402eeffa7fac5ee9e0666fd.jpg',
        'https://i.pinimg.com/564x/66/32/53/663253a162b2b98867968e6c545f706a.jpg',
        'https://i.pinimg.com/564x/ce/9d/4d/ce9d4d0034d127aa36ecbdbc443d31d1.jpg',
        'https://i.pinimg.com/564x/85/97/17/859717b692ef98b50983f0806cb86f27.jpg',
        'https://i.pinimg.com/564x/c9/1b/2f/c91b2fe9e84566370bd27e27f6c9ef0c.jpg',
        'https://i.pinimg.com/736x/86/54/f3/8654f315db87600fb212d7d4c4b3f479.jpg',
        'https://i.pinimg.com/564x/7d/43/c6/7d43c6b553d06977377029a711b73c47.jpg',
        'https://i.pinimg.com/564x/d2/a4/c4/d2a4c45754aa1742c186dea23b9ad8ab.jpg',
        'https://i.pinimg.com/564x/9b/67/ef/9b67ef3f0f4c465f70128cbc2114483a.jpg',
        'https://i.pinimg.com/564x/9f/c2/55/9fc255c1f4563587719d3ccbd3a013d8.jpg',
      ],
      name: 'Valerian Family',
      names: {

      },
      projectId: 'mystika-warriors',
      traits: {
        personality: ['Calm', 'Mysterious', 'Resilient', 'Protective'],
        skills: ['Cryokinesis', 'Ice Manipulation', 'Frozen Armor', 'Blizzard Control'],
        specialAbilities: ['Blizzard Summoning', 'Glacial Aura', 'Frozen Domain'],
      },
      // Add any other relevant properties or details specific to Enceladus
    },
    {
      background: {
        // Ice elementals may communicate through elemental means rather than conventional languages
        education: 'Self-taught in the ways of ice manipulation',

        language: 'Elemental Tongue',

        nationality: 'Frozen Realm',
        occupation: 'Princess of the Frozen Realm',
        // Enceladus' primary role is to protect his realm from threats, making him a guardian or protector
      },
      demographics: {
        age: 'Eternal',
        gender: 'FEMALE', // As an elemental, gender might not apply
        sexuality: 'ASEXUAL', // Similarly, sexuality might not apply
      },
      galleryId: 'Elemental',
      id: 'enceladus',
      identity: {
        ethnicity: 'Ice Elemental',
        genderIdentity: 'None',
        pronouns: 'None',
        religion: 'Winter is coming',
        // Ice elementals may not have specific racial backgrounds, but they may identify with their elemental origins
        // Enceladus is dedicated to protecting his realm, so he may have a spiritual affiliation with this role
        // Other details such as sexual orientation may not apply to an elemental being
      },
      images: [
        'https://i.pinimg.com/564x/ce/11/30/ce11303356e090df68257a22900ba1e8.jpg',
        'https://i.pinimg.com/564x/e4/fc/ea/e4fcea211fec416df0986bff904b7ed0.jpg',
        'https://storage.googleapis.com/pai-images/8b8b5ad5e20241d0911da357389ae46c.png',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a1435b8-3bb4-49e5-90fc-25139ed43610/danppxt-7edee74d-b37f-4e89-b057-9fe1a959ff76.jpg/v1/fit/w_800,h_779,q_70,strp/water_elemental_by_merillizaart_danppxt-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzc5IiwicGF0aCI6IlwvZlwvOGExNDM1YjgtM2JiNC00OWU1LTkwZmMtMjUxMzllZDQzNjEwXC9kYW5wcHh0LTdlZGVlNzRkLWIzN2YtNGU4OS1iMDU3LTlmZTFhOTU5ZmY3Ni5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8ZpIlL7q94fBo6BXWiphUbd5eRBRYYqQYTjDZsgqLsE',
        'https://i.pinimg.com/736x/b0/f0/a6/b0f0a637ae41c1bb7b2be4e399c13e70.jpg',
        'https://i.pinimg.com/736x/79/8f/0e/798f0e9d75c7e73ec3c5ca00e481412e.jpg',
        'https://i.pinimg.com/564x/e8/12/1e/e8121e4f43640e5c9f1a91e02f95d9b2.jpg',
      ],
      name: 'Enceladus',
      names: {
        firstName: 'Enceladus',
      },
      projectId: 'mystika-warriors',
      traits: {
        personality: ['Calm', 'Mysterious', 'Resilient', 'Protective'],
        skills: ['Cryokinesis', 'Ice Manipulation', 'Frozen Armor', 'Blizzard Control'],
        specialAbilities: ['Blizzard Summoning', 'Glacial Aura', 'Frozen Domain'],
      },
      // Add any other relevant properties or details specific to Enceladus
    },
    {
      background: {
        // Fire elementals may communicate through elemental means rather than conventional languages
        education: 'Self-trained in the art of fire manipulation',

        language: 'Elemental Tongue',

        nationality: 'Volcanic Realms',
        occupation: 'Guardian of the Inferno',
        // Sirius' primary role is to protect the volcanic regions of the underground realm, making him a guardian or protector
      },
      demographics: {
        age: 'Ancient',
        gender: 'MALE',
        sexuality: 'HETEROSEXUAL',
      },
      galleryId: 'Elemental',
      id: 'sirius_fire_elemental',
      identity: {
        ethnicity: 'Elemental',
        genderIdentity: 'None',
        pronouns: 'None',
        religion: 'Protector of the Volcanic Realms',
        // Fire elementals like Sirius may identify with their elemental origins and have a strong sense of duty
      },
      images: [
        'https://i.pinimg.com/736x/f3/36/2d/f3362dc1a46dfb56e40582106386c216.jpg',
        'https://i.pinimg.com/564x/18/1e/94/181e94c76aa2653395652ffc678029e3.jpg',
        'https://i.pinimg.com/564x/8d/c6/fb/8dc6fb2013320423ace93858f78e4d31.jpg',
        'https://i.pinimg.com/564x/6f/59/ea/6f59ea535c48965ed476635d9dcfc32b.jpg',
        'https://i.pinimg.com/564x/48/91/51/4891512bfeaae386c4e928767fdb9839.jpg',
        'https://i.pinimg.com/564x/56/ed/01/56ed01cc86a0f90039495ac33621464e.jpg',
        'https://i.pinimg.com/564x/37/af/bd/37afbdc8bd5c1cec213613d7d7d0f580.jpg',
        'https://i.pinimg.com/736x/f8/8c/39/f88c3961fcd2dfc988222e512bbac081.jpg',
      ],
      name: 'Sirius',
      names: {
        firstName: 'Sirius',
      },
      projectId: 'game_project_id',
      traits: {
        personality: ['Honorable', 'Powerful', 'Resolute', 'Guardian'],
        skills: ['Pyrokinesis', 'Flame Manipulation', 'Inferno Control', 'Magma Crafting'],
        specialAbilities: ['Volcanic Eruption', 'Infernal Aura', 'Eternal Flame'],
      },
      // Add any other relevant properties or details specific to Sirius
    },
    {
      background: {
        education: 'Student at the School of Mystic Arts',
        language: 'Unknown',
        nationality: 'Unknown',
        occupation: 'Mystic Warrior'
      },
      demographics: { age: 17, gender: 'MALE', sexuality: 'HETEROSEXUAL' },
      id: 'kairo',
      images: [
        'https://i.pinimg.com/564x/e1/3a/94/e13a94faf1a05c5da58018f9aae62f25.jpg',
        'https://i.pinimg.com/564x/cb/dd/58/cbdd581525af5caad0b0b8d51b330590.jpg',
        'https://i.pinimg.com/564x/a3/ca/da/a3cadaa740ef974219c9e3424febb49c.jpg',
        'https://i.pinimg.com/564x/b4/2f/76/b42f7607a126be0d46b6839efe1edafb.jpg',
        'https://i.pinimg.com/564x/03/69/3a/03693acea4c085c6b8f85c902cd9ba3d.jpg',
        'https://i.pinimg.com/564x/1d/2b/41/1d2b41abb53ca7e14601b6ef05dfccec.jpg',
        'https://i.pinimg.com/564x/bc/cb/a6/bccba69ad4d4879ef0d0d17ece4a49f2.jpg',
        'https://i.pinimg.com/564x/a8/22/db/a822dbfb6a6b3af053673a5feb74c7d6.jpg',
        'https://i.pinimg.com/564x/b8/e8/0e/b8e80ede40eda0802dd07db53c7e7633.jpg',
        'https://i.pinimg.com/564x/12/c3/dc/12c3dc492285b39a14e72d4380bbd158.jpg',
        'https://i.pinimg.com/564x/8c/e4/2b/8ce42b81ad3d03bf74d76925e22a87d5.jpg',
        'https://i.pinimg.com/564x/e0/45/71/e04571d0a83d9e0ebc338574c723ca9f.jpg',
        'https://i.pinimg.com/564x/cf/e4/b5/cfe4b59609096c353b325ec6daea2b26.jpg',
        ''

      ],
      name: 'The Windblade',
      names: { firstName: 'Kairo' },
      projectId: 'mystika-warriors',
      story: 'Student at the School of Mystic Arts, discovered mystic arts at 16.',
      traits: {
        personality: ['Determined', 'Humble', 'Just', 'Easy-going'],
        skills: ['Swordsmanship', 'Wind Manipulation', 'Stealth', 'Aptitude'],
        specialAbilities: ['Double Jump', 'Teleportation', 'Rage Art']
      },
      type: 'Character'
    },
    {
      background: {
        education: 'Student at the School of Mystic Arts',
        language: 'Unknown',
        nationality: 'Unknown',
        occupation: 'Mysterious Warrior with Elemental Powers'
      },
      demographics: { age: 17, gender: 'MALE', sexuality: 'HETEROSEXUAL' },
      id: 'raijin',
      images: [
        'https://i.pinimg.com/564x/ee/e0/b6/eee0b6079e9faacf7f8227fa5b71879b.jpg',
        'https://i.pinimg.com/564x/7c/4c/ea/7c4cea732d7ef06df8fe42cb12571a14.jpg',
        'https://i.pinimg.com/564x/0e/3c/f6/0e3cf69b1e346de7bb3ab21626576bca.jpg',
        'https://i.pinimg.com/564x/54/b6/c8/54b6c879be61b6281933df175029c166.jpg',
        'https://i.pinimg.com/564x/c9/26/18/c926184aa1cad642da781ff40d2e7a36.jpg',
        'https://i.pinimg.com/564x/94/5c/07/945c071cdd264a2ad08b5ccfeefc7f65.jpg',
        'https://i.pinimg.com/564x/14/4e/6f/144e6f7ac8adf7563e525a3fbdda4f51.jpg',
        'https://i.pinimg.com/564x/82/06/46/8206468d951a5b9f1e2b467b2a9340fa.jpg',
        // 'https://i.pinimg.com/564x/97/48/ec/9748eca5508a34a54f31cf6437b75cd8.jpg',
        'https://i.pinimg.com/564x/82/10/a1/8210a16972f3109941beac46814614c2.jpg',
        'https://i.pinimg.com/564x/5b/7a/be/5b7abe6bf49b2c3d9502168b331b0c2e.jpg',
        'https://i.pinimg.com/564x/e9/2a/33/e92a33045558e2a28849e047bf8d3e02.jpg',
        'https://i.pinimg.com/564x/4f/34/5c/4f345c07b3ba0fecde6664011187df04.jpg',
      ],
      name: 'The Stormbringer',
      names: { firstName: 'Raijin' },
      projectId: 'mystika-warriors',
      story: 'Mysterious background, joined the School of Mystic Arts around the same time as Kairo.',
      traits: {
        personality: ['Enigmatic', 'Competitive', 'Conflicted'],
        skills: ['Sword Master', 'Elemental Manipulation'],
        specialAbilities: ['Lightning Manipulation', 'Thunder Strikes', 'Elemental Fusion']
      },
      type: 'Character'
    },
    // {
    //     id: 'seraphina',
    //     name: 'The Guiding Light',
    //     type: 'Character',
    //     projectId: 'mystika-warriors',
    //     names: { firstName: 'Seraphina' },
    //     images: [
    //         '',
    //         '',
    //         '',
    //         '',
    //         '',
    //         '',
    //         '',
    //     ],
    //     traits: {
    //         personality: ['Wise', 'Mysterious', 'Nurturing'],
    //         skills: ['Master of Clan Styles', 'Elemental Manipulation'],
    //         specialAbilities: ['Healing Arts', 'Telepathy', 'Elemental Sense']
    //     },
    //     demographics: { age: 'Unknown', gender: 'FEMALE', sexuality: 'BISEXUAL' },
    //     background: {
    //         nationality: 'Unknown',
    //         language: 'Unknown',
    //         education: 'Mystic Arts Mentor at the School of Mystic Arts',
    //         occupation: 'Guide and Guardian'
    //     },
    //     story: 'Guardian and mentor at the School of Mystic Arts, tasked with guiding students in their journey.'
    // },
    {
      background: {
        education: 'Master Swordsman',
        language: 'Unknown',
        nationality: 'Unknown',
        occupation: 'Clan Master - Leader of the Sword Clan at the School of Mystic Arts'
      },
      demographics: { age: 'Unknown', gender: 'FEMALE', sexuality: 'ASEXUAL' },
      id: 'masterAkio',
      images: [
        'https://i.pinimg.com/564x/60/99/ba/6099ba6b12e51b047b6e9ddf53a6a90c.jpg',
        'https://i.pinimg.com/564x/15/a4/ea/15a4ea55639086e2721c0a8634a18c90.jpg',
        'https://i.pinimg.com/564x/20/1b/fc/201bfc0e02170768f7ce589241187253.jpg',
        '',
        '',
        '',
        '',
      ],
      name: 'The Blade Master',
      names: { firstName: 'Master Akio' },
      projectId: 'mystika-warriors',
      story: 'Leader of the Sword Clan, dedicated to honing the art of the sword.',
      traits: {
        personality: ['Disciplined', 'Honorable', 'Stoic'],
        skills: ['Master Swordsman', 'Sword Style Instructor'],
        specialAbilities: ['Swordsmanship Mastery']
      },
      type: 'Character'
    },
    {
      id: 'grand-master-itsuno',
      images: [
        'https://i.pinimg.com/564x/1d/ca/37/1dca37d8b2357021e34d1133643233a5.jpg',
        'https://i.pinimg.com/564x/a9/9e/a1/a99ea181e72fd8ef5ab6acdb19ca24e8.jpg',
        'https://i.pinimg.com/564x/92/f3/ff/92f3ff76e1f2ad4fc06cba4cf73bca63.jpg',
        '',
        '',
        '',
        '',
        '',
      ],
      name: 'The Grand Master of Blade Arts',
      names: { firstName: 'Itsuno', lastName: 'Kimea' },
      projectId: 'mystika-warriors',
      type: 'Character'
    },
    {
      background: {
        education: 'Shield Specialist',
        language: 'Unknown',
        nationality: 'Unknown',
        occupation: 'Clan Master - Leader of the Shield Clan at the School of Mystic Arts'
      },
      demographics: { age: 'Unknown', gender: 'MALE', sexuality: 'HOMOSEXUAL' },
      id: 'master-geerod',
      images: [
        'https://i.pinimg.com/564x/88/18/84/88188449ae99075326f34c715334c437.jpg',
        'https://i.pinimg.com/564x/3f/d5/ea/3fd5ea7e0975e6d8eb126d8c34db11e8.jpg',
        'https://i.pinimg.com/564x/01/3d/8d/013d8dbba811ecd5f5c7d781da8d778f.jpg',
        '',
        '',
        '',
        '',
      ],
      name: 'The Shield Guardian',
      names: { firstName: 'Master Geerod' },
      projectId: 'mystika-warriors',
      story: 'Leader of the Shield Clan, responsible for protecting the mystic world.',
      traits: {
        personality: ['Stoic', 'Protective', 'Strategic'],
        skills: ['Shield Specialist', 'Defensive Tactics Instructor'],
        specialAbilities: ['Impenetrable Shield']
      },
      type: 'Character'
    },
    {
      background: {
        education: 'Martial Arts Master',
        language: 'Unknown',
        nationality: 'Unknown',
        occupation: 'Clan Master - Leader of the Strike Clan at the School of Mystic Arts'
      },
      demographics: { age: 'Unknown', gender: 'MALE', sexuality: 'HETEROSEXUAL' },
      id: 'grandmasterShoji',
      images: [
        'https://i.pinimg.com/564x/ef/17/a9/ef17a99bd4c1177e855c7346df8d5288.jpg',
        'https://i.pinimg.com/564x/98/4d/db/984ddbd17da6703da449fa11ebfec264.jpg',
        'https://i.pinimg.com/564x/4b/43/7e/4b437e24abc50b11db25001a17178cd2.jpg',
        'https://i.pinimg.com/564x/f4/ba/40/f4ba40b2cec0b0dc3d612327f2038501.jpg',
        'https://i.pinimg.com/564x/8c/12/c2/8c12c27d723497e4a5750ff6f16aed3c.jpg',
        '',
      ],
      name: 'Iron Fist',
      names: { firstName: 'Grandmaster Shoji' },
      projectId: 'mystika-warriors',
      story: 'Leader of the Strike Clan, emphasizing fluidity and power in combat.',
      traits: {
        personality: ['Wise', 'Fluid', 'Martial Artist'],
        skills: ['Martial Arts Master', 'Hand-to-Hand Combat Instructor'],
        specialAbilities: ['Swift Strikes', 'Unseen Movement']
      },
      type: 'Character'
    },
    {
      background: {
        education: 'Master Archer',
        language: 'Unknown',
        nationality: 'Unknown',
        occupation: 'Clan Master - Leader of the Shoot Clan at the School of Mystic Arts'
      },
      demographics: { age: 'Unknown', gender: 'FEMALE', sexuality: 'HETEROSEXUAL' },
      id: 'ladyYumi',
      images: [
        'https://i.pinimg.com/736x/b0/f0/a6/b0f0a637ae41c1bb7b2be4e399c13e70.jpg',
        'https://i.pinimg.com/564x/b8/8f/7b/b88f7bfe6b4851089710d702b0e566c4.jpg',
        'https://i.pinimg.com/564x/75/a2/25/75a225e90e32569cc86172b2f7356613.jpg',
        'https://i.pinimg.com/564x/42/7f/b6/427fb66d9879f5c1b17675a66e1902ba.jpg',
        'https://i.pinimg.com/564x/aa/b4/99/aab49938db49e2603c71e07730c20c3d.jpg',
        'https://i.pinimg.com/564x/13/46/5c/13465c818f1ee29447f474b0e53fb808.jpg',
        'https://i.pinimg.com/564x/5e/db/bc/5edbbc8750106d45da5cf9a3aaba9c3b.jpg',
        'https://i.pinimg.com/564x/e9/c0/f7/e9c0f7ce45066ecf03300552d96375cf.jpg',
        'https://i.pinimg.com/564x/a5/0f/08/a50f08e5cf70851b7e1528c3c3030cfa.jpg',
        'https://i.pinimg.com/564x/b0/c2/5e/b0c25ea8d93f334850197bce2642f199.jpg',
        'https://i.pinimg.com/564x/ad/54/2b/ad542bec869ac4649d4d7b847b1fa4ca.jpg',
        'https://i.pinimg.com/564x/70/f1/15/70f115119f4d7c443d6cbd9056bd2552.jpg',
      ],
      name: 'The Silent Archer',
      names: { firstName: 'Lady Yumi' },
      projectId: 'mystika-warriors',
      story: 'Leader of the Shoot Clan, skilled in the art of ranged combat.',
      traits: {
        personality: ['Enigmatic', 'Precise', 'Archer'],
        skills: ['Master Archer', 'Ranged Combat Instructor'],
        specialAbilities: ['Precision Shots', 'Arrow Manipulation']
      },
      type: 'Character'
    }
  ];

  createDocument({
    data: characters[0] as ICharacter,
    projectId,
    slice: 'characters',
    workspaceId: userId
  });

};

export const seedResource = (
  args: {
    userId: string,
    projectId: string,
    slice: SliceType,
    data: any}
): void => {
  const {
    slice,
    userId,
    projectId,
    data
  } = args;

  log('seedResource: creating => ', args);

  createDocument({
    data,
    projectId,
    slice,
    workspaceId: userId
  });
};