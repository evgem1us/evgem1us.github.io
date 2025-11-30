---
sidebar_position: 1
---

# Пример оптимизации текстур

На скриншоте ниже текстуры с открытыми материалами с разрешением 4096 относятся к обуви. Смело можно уменьшать до 1024, на обувь мало кто смотрит с такого близкого расстояния:  
![Пример текстур](/img/guides/nondestructive_optimization/image-36.png)

После уменьшения и замены формата у Normal Map на `RG Compressed BC5` получилось следующее (размер текстурной памяти уменьшен в 16 раз):  
![alt text](/img/guides/nondestructive_optimization/image-42.png)

Далее пример Normal Map, внешний вид которой неплохо бы сохранить (влияет на рельеф всей основной одежды):  
![alt text](/img/guides/nondestructive_optimization/image-43.png)

Уменьшаем карту нормалей до 2048 и меняем формат, Color-текстура уже была 2048. Карта нормалей теперь занимает в 4 раза меньше памяти.  
![alt text](/img/guides/nondestructive_optimization/image-45.png)

А если ужать до 1024, то рельеф будет уже не виден:  
![alt text](/img/guides/nondestructive_optimization/image-46.png)
