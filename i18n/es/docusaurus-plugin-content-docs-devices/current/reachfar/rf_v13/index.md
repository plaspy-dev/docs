---
slug: /reachfar/rf_v13
id: rf_v13
sidebar_label: RF-V13
sidebar_class_name: menu_item_tracker
---
# Reachfar - RF-V13

![RF-V13](./tracker.jpg)

El Reachfar RF-V13 es un sistema de alarma inalámbrico compacto para puertas/ventanas y una alarma GSM, de Reachfar, diseñado para una seguridad perimetral discreta. Compatible con Plaspy cuando se configura para aceptar sus informes de alarma por GPRS/TCP-IP o SMS, el RF-V13 combina detección de intrusiones mediante sensor magnético, conocimiento de ubicación LBS/GPS y verificación de alarma por voz bidireccional en un formato compacto, ideal para hogares, comercios y pequeñas oficinas.

Construido para una instalación sencilla y notificación remota, el RF-V13 transmite alarmas vía GSM cuádri-banda \(850/900/1800/1900 MHz\) y admite TCP/IP GPRS Class 12, así como alertas por SMS y la app móvil de Reachfar. Dado que proporciona posicionamiento LBS y datos de tiempo de posicionamiento GPS, puede alimentar a Plaspy con datos de ubicación y de eventos para seguimiento en tiempo real y monitorización anti-robo, mientras que su host compacto de 40 × 34 × 14 mm y la batería recargable permiten una instalación discreta en puertas o ventanas.

## Puntos clave

- Compatible con Plaspy: se integra con Plaspy mediante reportes GPRS/TCP-IP o mensajes SMS formateados para alarmas y actualizaciones de ubicación.
- Compacto y discreto: unidad pequeña \(40 × 34 × 14 mm, 27 g\) que se monta fácilmente con el Velcro suministrado para una instalación de seguridad de baja visibilidad.
- Informes de alarma GSM fiables: GSM cuádri-banda y GPRS Class 12 permiten notificaciones remotas por SMS, push y en la plataforma.
- Detección de intrusiones en puertas/ventanas: caja de sensor magnético dedicada detecta eventos de apertura e informa de inmediato.
- Conocimiento básico de ubicación: posicionamiento LBS \(200–800 m\) y características de tiempo de adquisición del posicionamiento GPS para obtener información de ubicación contextual cuando GPS está disponible.
- Batería recargable: batería integrada de 520 mAh con un tiempo de espera GSM típico de 4–5 días, adecuada para uso de alarma intermitente.
- Verificación bidireccional: admite llamadas de voz bidireccionales para confirmar al instante los eventos y mejorar la respuesta ante emergencias.

## Cómo funciona con Plaspy

Cuando se configura para Plaspy, el RF-V13 puede entregar eventos de alarma, telemetría básica y lecturas de ubicación a la plataforma de Plaspy ya sea enviando paquetes GPRS/TCP-IP a un endpoint de Plaspy o reenviando mensajes SMS formateados que Plaspy ingiere. Plaspy luego marca la hora de los eventos, mapea ubicaciones aproximadas y envía alertas a los usuarios mediante notificación en la app, SMS o correo electrónico según las reglas de la cuenta. Debido a que el RF-V13 se centra en la intrusión de puertas/ventanas y en el reporte GSM, proporciona una funcionalidad de anti-robo y alerta perimetral confiable, más que telemetría de flota de alta frecuencia.

- Actualizaciones de ubicación y telemetría en tiempo real — a través de GPRS/TCP-IP o SMS; la precisión de LBS es aproximadamente de 200–800 metros \(posición aproximada\).
- Estado de alarma de puerta/ventana — eventos de apertura/cierre del sensor magnético y disparos de alarma enviados a Plaspy para alertas y registro.
- Estado de batería y del dispositivo — estado de batería recargable de 520 mAh y reportes de conectividad del dispositivo disponibles vía SMS/app.
- Verificación por llamada de voz bidireccional — llamadas de voz inmediatas a números predefinidos para confirmar eventos y coordinar la respuesta.
- Sensores/beacons Bluetooth — RF-V13 no incluye soporte de sensores BLE; Plaspy puede combinar datos del RF-V13 con otros dispositivos BLE compatibles con Plaspy cuando sea necesario.

## Resumen técnico

| Conectividad | GSM cuádri-banda \(850/900/1800/1900 MHz\); GPRS Class 12, TCP/IP |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 MHz |
| Alimentación y batería | Batería integrada recargable de 520 mAh; tiempo de espera GSM típico 4–5 días \(según uso\) |
| Interfaces | 1 × caja de sensor magnético para puerta/ventana; configuración de comandos por SMS; funcionalidad de llamadas de voz bidireccionales |
| GNSS | Antena GSM/GPS integrada; precisión de posicionamiento LBS ≈ 200–800 m; tiempo de posicionamiento \(cielo despejado\) — Arranque en frío ~30 s, Arranque en tibio ~29 s, Arranque en caliente ~5 s |
| Bluetooth | No soportado / No especificado |
| Gestión remota | Configurable mediante comandos SMS y la app/plataforma móvil de Reachfar; reporte TCP/IP a servicios en línea \(integración con Plaspy vía TCP-IP o SMS\) |
| Formato | Host compacto 40 × 34 × 14 mm; peso del host ≈ 27 g; Velcro suministrado para montaje |

## Casos de uso

- Hogar y apartamentos: monitorización discreta de puertas/ventanas con alertas inmediatas por SMS y notificaciones push, y verificación de llamadas bidireccionales a través de Plaspy.
- Protección perimetral de tiendas pequeñas o quioscos: notificación de alarma remota a propietarios y personal, con conocimiento de ubicación aproximada para ubicaciones móviles o temporales.
- Monitorización remota de propiedades y activos: ubicación básica y alertas de intrusión para cabañas, cajas de almacenamiento o activos pequeños desatendidos donde no se requiere telemetría GPS precisa.
- Alarmas verificadas para entradas sensibles: las llamadas de voz bidireccionales permiten confirmar rápidamente los eventos y reducir los costos de respuesta ante falsas alarmas.

## Por qué elegir este rastreador con Plaspy

El RF-V13 ofrece una solución de alarma para puertas/ventanas asequible y de fácil instalación que se integra con Plaspy para alertas centralizadas y registro de eventos. Su soporte GSM cuádri-banda y GPRS TCP/IP facilita enrutar alarmas y datos de ubicación hacia Plaspy, mientras que el sensor magnético, la voz bidireccional y la batería recargable proporcionan la funcionalidad esencial para anti-robo y monitorización perimetral. Aunque el RF-V13 está optimizado para detección de intrusiones y ubicación LBS de alcance, no para telemetría de flota de alta frecuencia; al combinarlo con Plaspy obtienes alertas centralizadas, registros históricos de eventos y notificaciones en la app para una respuesta rápida.

Nota: La página del producto RF-V13 indica que este modelo figura como "fuera de producción". Las especificaciones anteriores reflejan los datos originales del fabricante. Antes de la implementación, confirme la compatibilidad de software actual, los endpoints del servidor y el soporte de la plataforma con Reachfar o con el soporte de Plaspy para asegurar una integración fluida y un servicio continuo.

