---
slug: /winrich/gt06
id: gt06
sidebar_label: GT06
sidebar_class_name: menu_item_tracker
---
# Winrich - GT06

![GT06](./tracker.jpg)

El GT06 es un terminal de posicionamiento de vehículos GPS compacto e inteligente, compatible con Plaspy y diseñado para un seguimiento en tiempo real confiable y la gestión remota de vehículos. Al combinar la posición por satélite GPS con comunicación GSM/GPRS de cuatro bandas, el GT06 ofrece actualizaciones continuas de ubicación, telemetría y reportes de alarmas por SMS o GPRS/TCP, lo que lo convierte en una opción práctica para gestores de flotas y propietarios de vehículos que buscan integración con Plaspy sin una instalación compleja.

El compacto GT06 admite detección ACC \(ignición\), alarma SOS, detección de golpes \(vibraciones\), vigilancia de voz \(escucha remota\) y control de relé para corte remoto de combustible/energía \(función de inmovilizador remoto\). Con un rango de voltaje de entrada amplio y una batería interna de respaldo de 300 mAh, el GT06 está diseñado para una instalación sencilla en coches, motocicletas, vehículos eléctricos y barcos, y puede configurarse para enviar datos a su instancia de Plaspy mediante la configuración del IP/puerto del servidor o usando el conjunto de comandos SMS del dispositivo.

## Aspectos Clave

- Compatible con Plaspy: configure la IP/puerto del servidor para reenviar datos GPRS/TCP directamente a Plaspy para seguimiento y reportes en tiempo real.
- Conectividad GSM/GPRS de cuatro bandas \(850/900/1800/1900 MHz\) para una amplia cobertura geográfica y transporte de datos TCP/IP GPRS Clase 12.
- Telemetría esencial del vehículo: detección ACC \(ignición\), sensor de impactos, alarma SOS y vigilancia de voz remota para mejorar la conciencia situacional.
- Inmovilizador remoto / corte de combustible/energía mediante control de relé — las acciones de relé se restringen a baja velocidad o a vehículos detenidos por motivos de seguridad.
- Batería interna de 300 mAh que proporciona alarmas de corte de energía y respaldo corto cuando se pierde la energía externa.
- Configuración automática de APN y un conjunto amplio de comandos SMS que simplifican la integración, migración a servidores privados y la configuración remota.
- Diseño compacto, instalación sencilla \(conectar la fuente de alimentación para iniciar\) y un rango operacional robusto para uso en vehículos.

## Cómo Funciona con Plaspy

Integrar el GT06 con Plaspy es una tarea de configuración: configure el GT06 para enviar paquetes GPRS/TCP a la IP y al puerto del servidor de Plaspy \(el dispositivo admite configuración de servidor/puerto vía SMS\). Una vez dirigido a Plaspy, el GT06 transmite ubicación y telemetría para seguimiento en tiempo real, alertas e informes históricos. Si GPRS no está disponible, los comandos por SMS y las respuestas de posición basadas en SMS siguen disponibles para monitoreo puntual.

- Actualización de ubicación y telemetría en tiempo real vía GPRS \(TCP/IP\) a Plaspy.
- Estado de ignición \(ACC\) reportado para la actividad del conductor/vehículo y filtrado de eventos.
- Alarmas SOS, golpes \(vibración\) y velocidad entregadas a Plaspy como eventos de alerta.
- Inmovilizador remoto \(control de relé\) para corte de combustible — comandos de relé emitidos desde Plaspy o desde un número de administrador autorizado \(la función está sujeta a velocidad y reglas de seguridad\).
- Vigilancia de voz \(monitoreo remoto llamando al dispositivo\) y control de comandos por SMS para diagnósticos y configuración remota si es necesario.

## Resumen Técnico

| Conectividad | GSM/GPRS \(GPRS Clase 12\), TCP/IP sobre GPRS; control e informes por SMS |
| --- | --- |
| Bands | GSM de cuatro bandas: 850 / 900 / 1800 / 1900 MHz |
| Alimentación & Batería | Voltaje de trabajo 9–50 V CC; corriente de trabajo ~22 mA \(12 V CC\), ~12 mA \(24 V CC\); batería interna de respaldo de 300 mAh \(alarmas de corte de energía y respaldo corto\) |
| Interfaces | Detección ACC \(ignición\), entrada SOS, sensor de choque \(vibración\), entrada de micrófono externo \(vigilancia de voz\), control de relé para corte de combustible/energía; conector de alimentación y arnés de cableado estándar |
| GNSS | Posicionamiento por satélite GPS; arranque en frío ~38 s \(cielo despejado\), arranque tibio ~32 s, arranque en caliente ~2 s; precisión típica ~10 m \(2D RMS\) |
| Bluetooth | No especificado / no se reportan sensores Bluetooth en la documentación del GT06 |
| Gestión Remota | Monitoreo web/plataforma \(la plataforma del fabricante es gratuita por un año\), configuración de IP/puerto del servidor vía SMS \(803#server#port#\), configuración automática de APN, conjunto amplio de comandos SMS para control y ajustes remotos |
| Factor de Forma | Mini rastreador de vehículos; dimensiones 98 × 52 × 16.5 mm; diseñado para coches, motocicletas, vehículos eléctricos y barcos |
| Ambiental | Temperatura de operación -20°C a +70°C; humedad 20%–80% HR |

## Casos de Uso

- Gestión de flotas: seguimiento en tiempo real, registros de ignición e informes de movimiento para optimizar rutas y utilización a través de los paneles de Plaspy.
- Antirrobo e inmovilización: alarma SOS, alertas por vibración y control remoto de relé para cortar combustible/energía cuando el vehículo está detenido o se desplaza por debajo de un umbral de seguridad.
- Comportamiento del conductor y telemática: detección ACC y alarmas de velocidad que respaldan la generación de eventos del conductor y el monitoreo de cumplimiento.
- Diagnóstico remoto y vigilancia de voz: vigilancia de voz y conjunto de comandos por SMS permiten a los administradores realizar comprobaciones remotas y escuchar el interior del vehículo para verificaciones de seguridad.
- Seguimiento simple de activos para patinetes, motocicletas y embarcaciones pequeñas donde se requiere un factor de forma compacto y un rango de voltaje amplio.

## Por Qué Elegir Este Rastreador con Plaspy

El GT06 ofrece un equilibrio práctico entre la tecnología GSM/GPS probada y un conjunto de características orientadas a la integración con Plaspy. Su soporte de GSM/GPRS de cuatro bandas y el transporte de datos TCP/IP permiten reenviar datos de posición y telemetría directamente a Plaspy con una configuración mínima. La detección ACC incluida, la alarma de vibración, la SOS y el control de relé proporcionan las herramientas de telemetría y anti‑robo que esperan los gestores de flotas, mientras que la batería de respaldo interna de 300 mAh garantiza el reporte de alarmas cuando se pierde la energía externa.

Para organizaciones que usan Plaspy, el GT06 reduce la fricción de integración: configuración automática de APN, comandos de servidor/puerto vía SMS y soporte de la plataforma del fabricante \(gratuito por un año\) hacen que la migración y las pruebas sean simples. Aunque el GT06 no liste sensores Bluetooth, sí ofrece la telemetría central, el estado de ignición y los controles de inmovilizador remoto que suelen requerirse para la gestión de flotas, la protección anti‑robo y las estrategias básicas de gestión de combustible/energía. Configure el dispositivo para apuntar al servidor de su Plaspy y comience a recibir seguimiento en tiempo real, alertas y telemetría de vehículos sin cambios de hardware complejos.

