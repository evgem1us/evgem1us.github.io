---
sidebar_position: 2
---

# Подготовка к работе

## Особенности недеструктивной работы с аватарами {#nondestructive}

VRChat SDK отображает ранг производительности для аватаров, находящихся на сцене в текущий момент, и не учитывает недеструктивные изменения, вносимые Modular Avatar и прочими пакетами.

Есть несколько способов увидеть аватар, который будет загружен в VRChat, и его ранг производительности:
1. Собрать (запечь) аватар на сцене. Для этого:
   1. Нажмите ПКМ по аватару - `Modular Avatar` - `Manual Bake Avatar`.
   2. На сцене в паре метров перед аватаром появится "запеченный аватар" с припиской `(Clone)`:
      1. Для одного аватара одновременно может быть только один клон (последний), предыдущие будут поломаны.
      2. Если вы в аватаре также используете VRCFury, то это еще не финальная версия аватара, для нее нужно дополнительно выбрать клона и в меню сверху выбрать `Tools` - `VRCFury` - `Build an Editor Test Copy`, смотреть изменения уже на нем.
   3. В клоне можно посмотреть аватар в том виде, в котором он будет загружен в VRChat. Проверьте по клону удалено ли все лишнее из аватара.
   4. Посмотрите характеристики Clone-аватара в VRChat SDK
2. С `Anatawa Avatar Optimizer` в `ALCOM/Creator Companion` добавляется пакет `anatawa12 gist's pack`
   1. Добавьте пакет в проект
   2. Один раз в проекте нужно включить отображение `Actual Performance`, для этого - в меню сверху выберите `Tools` - `anatawa12's gist selector` - галочка напротив `ActualPerformanceWindow` - снизу `Apply`
   3. Запустите `Play Mode` (можно с `Gesture Manager`). При входе появится окно `Actual Performance` с рангом производительности аватара для ПК и Android.
      1. Android можно выключить пока не занимаетесь Android аватаром.
   4. Если окно оставить в проекте, будет показывать результат последнего запуска аватара.

:::warning
Все изменения нужно делать не в клоне, а в оригинальном аватаре.
:::

Также при сборке/запуске аватара вам скорее всего будет показывать много предупреждений в `NDMF Console`.
- Пока на них желтый предупреждающий знак - прочитать, понять что это, и если так и задумано, проигнорировать.
- Красные предупреждающие знаки нужно исправить, без них аватар не загрузится

Пример предупреждений:  
![Предупреждения NDMF Console](/img/guides/nondestructive_optimization/image-79.png)

Используйте последнюю рекомендуемую VRChat-ом версию Unity, обновите все пакеты до последних версий в ALCOM/Creator Companion. 


## Полезные ссылки

- [https://vrc.school/](https://vrc.school/) - много полезных статей , объясняющих создание аватаров в Unity (на английском)

## ALCOM - альтернатива Creator Companion {#alcom}

:::tip
Вместо Creator Companion рекомендую использовать [ALCOM](https://vrc-get.anatawa12.com/en/alcom/), сделанный anatawa12, автором используемого в гайде оптимизатора аватаров. Работает быстрее и имеет массу Quality of Life фишек. Переносить из Creator Companion при установке ничего не нужно, ALCOM автоматом подтянет настройки и список проектов.
:::

## Обязательные пакеты

Используемые в гайде пакеты и ссылки на репозитории для ALCOM/Creator Companion:
- `NDMF` и `Modular Avatar` - основа недеструктивной работы с аватарами, остальные пакеты зависят как минимум от NDMF. [Сайт](https://modular-avatar.nadena.dev/), [GitHub 1](https://github.com/bdunderscore/modular-avatar), [GitHub 2](https://github.com/bdunderscore/ndmf), ссылка на репозиторий:
  > https://vpm.nadena.dev/vpm.json
- `Anatawa12 Avatar Optimizer` - недеструктивный оптимизатор аватаров, используемый в гайде. [Сайт](https://vpm.anatawa12.com/avatar-optimizer/en/); [GitHub](https://github.com/bdunderscore/modular-avatar), ссылка на репозиторий:
  > https://vpm.anatawa12.com/vpm.json
- `Thry's Avatar Performance Tools` - полезные утилиты по определению производительности аватара. [GitHub](https://github.com/Thryrallo/VRC-Avatar-Performance-Tools?ysclid=mh4e4rad3d79181423), ссылка на репозиторий:
  > https://vpm.thry.dev/index.json
- `Gesture Manager` - эмулятор аватара в Play Mode в Unity, позволяет проверить аватар без загрузки в VRChat, уже встроен в ALCOM/Creator Companion
- `Meshia Mesh Simplification` - недеструктивное сжатие моделей по треугольникам (полигонам) [Сайт](https://ramtype0.github.io/Meshia.MeshSimplification/index.html), [GitHub](https://github.com/RamType0/Meshia.MeshSimplification), ссылка на репозиторий:
   > https://ramtype0.github.io/VpmRepository/index.json
   - При установке данного пакета Unity предложит вам обновить под него библиотеку Boost. Проблем с обновлением библиотеки я пока ни у кого не видел, но на всякий случай можете сделать копию своего проекта

:::warning
Используемые пакеты не выполняют оптимизацию компонентов VRCFury, при их наличии и загрузке аватара будет выводиться соответствующее предупреждение. Некоторые компоненты VRCFury в определенных ситуациях скорее всего могут быть проигнорированы.
:::

## Пакеты популярных шейдеров

- `LilToon` - [Сайт](https://lilxyzw.github.io/lilToon/), [GitHub](https://github.com/lilxyzw/lilToon), ссылка на репозиторий:
  > https://lilxyzw.github.io/vpm-repos/vpm.json
- `Poiyomi` (бесплатная версия) - [Сайт](https://www.poiyomi.com/); [GitHub](https://github.com/poiyomi/PoiyomiToonShader), ссылка на репозиторий:
  > https://poiyomi.github.io/vpm/index.json

## Прочие пакеты

- `d4rk' Avatar Optimizer` - судя по описанию, во многом пересекается с компонентом `AAO Trace and optimize` и делает дополнительные фишки. [GitHub](https://github.com/d4rkc0d3r/d4rkAvatarOptimizer), ссылка на репозиторий:
  > https://d4rkc0d3r.github.io/vpm-repos/main.json
  - В текущей версии гайда не могу гарантировать его работу, надо протестить в следующих версиях, но если хотите использовать его - попробуйте не добавлять `AAO Trace and optimize`. По идее нет особого смысла иметь оба компонента на аватаре одновременно.
    > TODO Протестить работу этого оптимизатора с гайдом. Судя по коду - он знает по крайней мере про Modular Avatar и запускается после него.
- `Hai Prefabulous For VRChat` - частично повторяет функционал предыдущих пакетов, но появился раньше, плюс имеет некоторые дополнительные необязательные плюшки. А репозиторий от Hai - это в принципе маст-хэв для работы с аватарами. [Сайт](https://docs.hai-vr.dev/docs/products/prefabulous); [GitHub 1](https://github.com/hai-vr/prefabulous-avatar); [GitHub 2](https://github.com/hai-vr/prefabulous-universal), ссылка на репозиторий:
  > https://hai-vr.github.io/vpm-listing/index.json

  > TODO Добавить компоненты из Prefabulous в гайд