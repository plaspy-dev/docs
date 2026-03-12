---
slug: /thingsys/ts_g17hs
id: ts_g17hs
sidebar_label: TS-G17Hs
sidebar_class_name: menu_item_tracker
---
# ThingSys - TS-G17Hs

![TS-G17Hs](./tracker.jpg)

El TS-G17Hs \(J16 Pro\) es un rastreador GPS para vehículos 4G LTE CAT1 compacto, diseñado para un seguimiento global fiable y telemetría. Diseñado para integrarse sin problemas con Plaspy, este rastreador GPS compatible con Plaspy ofrece seguimiento en tiempo real, estado de encendido y E/S configurable para inmovilización y alertas SOS, todo en un formato pequeño y de difícil detección, adecuado para coches, camiones, autobuses y motocicletas.

Construido alrededor del módulo SIMCOM 7670SA y con soporte para redes 4G y de reserva 2G, el TS-G17Hs ofrece posicionamiento de alta sensibilidad incluso en entornos con señal limitada o débil. Con un amplio rango de tensión de entrada y una batería de respaldo integrada, está optimizado para la gestión de flotas y aplicaciones anti-robos donde la telemetría continua y el almacenamiento fiable de datos en zonas sin cobertura son determinantes.

## Puntos clave

- Rastreador GPS compatible con Plaspy para seguimiento en tiempo real y visualización de telemetría en la plataforma Plaspy.
- 4G LTE Cat-1 con respaldo 2G GSM para cobertura celular mundial y reportes GPRS estables.
- E/S del vehículo: detección de encendido \(ACC\), soporte para botón SOS, control de relé para corte/restablecimiento remoto \(se requiere un relé adicional\) y micrófono integrado opcional.
- Batería de respaldo integrada \(140–150 mAh\) y amplio rango de tensión de funcionamiento \(9V–90V\) para instalaciones robustas en vehículos de coches, camiones, autobuses y motocicletas.
- GNSS de alta sensibilidad con precisión de posicionamiento de hasta 30 m y tiempos de inicio rápidos \(arranque en caliente ≤2 s; arranque en frío promedio ≤32 s al aire libre\).
- Datos de zonas sin cobertura \(hasta 8,000 mensajes\) para garantizar el almacenamiento en búfer de eventos durante las lagunas de cobertura y su posterior carga a Plaspy.
- Soporta protocolos de seguimiento comunes \(GT06 / CRX3\) y conmutación basada en SMS a JT808, Tianqin o Tianhe cuando sea necesario.

## Cómo funciona con Plaspy

Cuando está conectado a Plaspy, el TS-G17Hs transmite la ubicación y la telemetría del vehículo para una visualización instantánea, alertas e informes históricos. Plaspy procesa los informes GPRS y SMS del dispositivo, interpreta los mensajes de protocolo y expone los eventos de encendido, las alarmas SOS y los registros de zonas sin cobertura almacenados a través de una única interfaz de gestión de flotas.

- Actualizaciones de ubicación y telemetría en tiempo real vía GPRS \(con sondeo por SMS disponible para escenarios de bajo consumo de datos o de respaldo\).
- Estado de encendido \(ACC\) y eventos de movimiento y G-sensor enviados a Plaspy para seguimiento operativo y detección de manipulación.
- Datos de zonas sin cobertura en búfer \(hasta 8,000 mensajes\) cargados automáticamente a Plaspy una vez que se restablece la cobertura, preservando el historial de eventos.
- Soporte de inmovilizador basado en relé: corte/restablecimiento remoto de combustible o del circuito es posible con un relé externo; Plaspy puede mostrar el estado del relé y, cuando se configure, enviar comandos de control permitidos.
- Alertas SOS y monitorización de voz opcional basada en micrófono pueden enviarse a Plaspy para una respuesta inmediata ante incidentes y registro.

## Resumen técnico

| Modelo | TS-G17Hs \(J16 Pro\) |
| --- | --- |
| Conectividad | 4G LTE Cat-1 con respaldo 2G GSM \(GPRS\); módulo SIMCOM 7670SA |
| Bandas | LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B28/B66; GSM: 850/900/1800/1900 MHz |
| Alimentación y batería | Voltaje de funcionamiento 9V–90V; batería de respaldo integrada de 140–150 mAh \(3.7V\) |
| Interfaces | Detección de encendido \(ACC\), control de relé para corte/restablecimiento \(requiere relé adicional\), SOS, micrófono opcional, ACC virtual, modo de reposo |
| GNSS | Posicionamiento de alta sensibilidad; precisión de hasta 30 m; arranque en caliente ≤2 s; arranque en frío promedio ≤32 s al aire libre |
| Vibración / Movimiento | Sensor de movimiento/G-sensor \(detección de vibración\) |
| Almacenamiento de datos | Buffer de mensajes de zonas sin cobertura de hasta 8,000 mensajes |
| Protocolos y Configuración | Predeterminado: GT06 / CRX3; puede cambiar a JT808, Tianqin o Tianhe vía SMS; soporta sondeo por mensajes de texto y modos de seguimiento GPRS |
| Ambiental | Temperatura de funcionamiento -20°C a +55°C |
| Dimensiones y peso | Aprox. 80 × 39 × 17 mm; ~51 g |
| Bluetooth | Bluetooth incorporado no especificado |
| Gestión remota | Configuración por SMS e integración de protocolo GPRS \(no se especifica FOTA\) |
| Factor de forma | Rastreador de vehículos compacto para instalación discreta |

## Casos de uso

- Gestión de flotas: ubicación continua, telemetría de encendido e historial de viajes para coches, furgonetas y vehículos pesados.
- Antirrobo e inmovilización: alertas SOS, detección de movimiento y corte habilitado por relé para reducir el riesgo de robo cuando se combina con controles de Plaspy.
- Entrega y monitorización de rutas: seguimiento en tiempo real y reportes en búfer para garantizar el cumplimiento de la ruta y prueba de movimiento incluso en zonas sin cobertura.
- Despliegues de flotas mixtas: rango de tensión amplio \(9–90V\) compatible con motocicletas, coches, camiones y autobuses con una misma familia de dispositivos.
- Telemetría basada en eventos: alertas de vibración/G-sensor y almacenamiento de zonas sin cobertura ayudan a capturar incidentes en áreas de baja cobertura.

## Por qué elegir este rastreador con Plaspy

El TS-G17Hs ofrece una combinación equilibrada de conectividad, E/S orientado al vehículo y un buffering robusto que lo convierten en una opción práctica para empresas que implementan Plaspy para la gestión de flotas y el monitoreo anti-robos. Sus informes compatibles con Plaspy aseguran que el seguimiento en tiempo real y la telemetría alimenten directamente sus paneles de control, mientras que los modos SMS/GPRS y la flexibilidad de protocolos simplifican la integración entre regiones.

Entre sus beneficios operativos figuran reportes de posición confiables en espacios reducidos, reobtención rápida de GNSS para una segmentación de viaje precisa y un formato compacto para una instalación discreta. Aunque el propio dispositivo no liste Bluetooth, el ecosistema de Plaspy puede combinar la telemetría del TS-G17Hs con sensores Bluetooth externos o sensores de monitoreo de combustible de terceros cuando se requieren telemetría expandida, como temperatura, carga o monitoreo de combustible. Para equipos que priorizan un rastreo de vehículos fiable, telemetría sensible al encendido y capacidad de inmovilizador basada en relés, el TS-G17Hs ofrece una solución pragmática y compatible con Plaspy.

