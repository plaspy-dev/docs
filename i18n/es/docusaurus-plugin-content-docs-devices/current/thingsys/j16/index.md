---
slug: /thingsys/j16
id: j16
sidebar_label: J16
sidebar_class_name: menu_item_tracker
---
# ThingSys - J16

![J16](./tracker.jpg)

El J16 es un rastreador GPS para vehículos compacto, compatible con Plaspy, basado en el módulo SIMCOM 7670SA. Con conectividad 4G LTE \(CAT1\) y respaldo 2G, el J16 ofrece seguimiento en tiempo real fiable y telemetría del vehículo para la gestión de flotas, monitoreo antirrobo y telemática general de vehículos. Dos variantes—J16A \(detección ACC y relé\) y J16B \(relé, micrófono y SOS\)—le permiten elegir el conjunto de funciones que se ajuste a su implementación.

El dispositivo está optimizado para una fácil integración con Plaspy: se comunica por TCP/IP y admite modos de seguimiento comunes \(seguimiento GPRS y sondeo por SMS\), por defecto utilizando los protocolos GT06/CRX3, con perfiles opcionales JT808, Tianqin y Tianhe vía SMS. Su tamaño compacto, batería interna de respaldo, sensor de movimiento/G y almacenamiento de mensajes en zonas sin cobertura hacen del J16 una opción práctica para flotas mixtas que operan en automóviles, autobuses, camiones y motocicletas.

## Aspectos clave

- Rastreador GPS compatible con Plaspy 4G LTE \(CAT1\) con respaldo 2G para una amplia cobertura celular y seguimiento en tiempo real fiable.
- Dos variantes: J16A con detección ACC y control de relé; J16B añade relé, micrófono incorporado y SOS para monitoreo avanzado y señalización de emergencia.
- Bandas celulares a nivel mundial \(LTE-FDD y GSM\) y comunicaciones TCP/IP para gestión de flotas y telemetría.
- Formato compacto y ligero \(80 × 39 × 17 mm, 51 g\) con batería interna de respaldo \(140–150 mAh\) para soportar fallos de energía de corta duración y usos antirrobo.
- Chip GPS de alta sensibilidad con inicio en caliente rápido \(≤2 s\) y rendimiento sólido de arranque en frío \(promedio ≤32 s\), precisión de ubicación ≤30 m.
- Sensor de movimiento/G, modo de reposo para ahorro de energía y cobertura en zonas sin cobertura con almacenamiento de hasta 8,000 mensajes.
- Amplio rango de tensión de operación \(DC 9V–90V\) adecuado para coches, autobuses, camiones y motocicletas; accesorios de relé opcionales permiten funciones de corte/restablecimiento remotas \(inmovilizador\).

## Cómo funciona con Plaspy

Integrar el J16 con Plaspy le ofrece datos de vehículo continuos y accionables en su panel de Plaspy. El rastreador envía paquetes de posición y telemetría mediante TCP/IP o GPRS a los servidores de Plaspy usando protocolos estándar, lo que permite a Plaspy mostrar la ubicación en vivo, generar alertas y almacenar el historial para informes. Plaspy admite los mensajes por defecto GT06/CRX3 y puede configurarse para aceptar perfiles de protocolo opcionales cuando sea necesario.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas por TCP/IP \(GPRS\) para seguimiento y mapeo fluidos en Plaspy.
- Detección ACC \(ignición\): se admiten entradas ACC virtuales y físicas, por lo que Plaspy puede reportar eventos de encendido/apagado y ejecutar lógica de negocio \(p. ej., horas de conductor\).
- Cobertura de áreas sin cobertura: el J16 almacena hasta 8,000 mensajes cuando está fuera de cobertura y los envía a Plaspy cuando se restablece la conectividad.
- Capacidad de inmovilización remota: el control de relé permite a Plaspy activar acciones de corte/restablecimiento de energía cuando se instala un accesorio de relé \(se requiere un relé adicional\).
- Micrófono y SOS \(J16B\): eventos opcionales de audio y señalización de emergencia se reportan a Plaspy para la gestión de incidentes cuando estén disponibles.
- Integración de telemetría para monitoreo de combustible y otros sensores cuando se empareja con CAN del vehículo o sensores externos: Plaspy puede combinar estas entradas con los datos de ubicación del J16 para obtener una visión más rica de la flota.
- Plaspy puede correlacionar los datos del J16 con otras fuentes \(por ejemplo, feeds de sensores Bluetooth gestionados por separado\) para ofrecer una visión telemática integral en sus despliegues.

## Resumen técnico

| Conectividad | 4G LTE \(CAT1\) mediante el módulo SIMCOM 7670SA; respaldo a 2G GSM; seguimiento TCP/IP, GPRS y sondeo por SMS soportados |
| --- | --- |
| Bandas | GSM850/900/1800/1900; LTE-FDD B1/B2/B3/B4/B5/B7/B8/B28/B66 |
| Potencia y Batería | Amplio rango de tensión de operación DC 9V–90V; batería interna de respaldo 140–150 mAh \(3.7V\) para operación durante fallos de energía a corto plazo |
| Interfaces | Detección ACC \(ignición\) virtual y física; control de relé \(corte/restablecimiento requiere un relé adicional\); micrófono y SOS opcionales en J16B; control de relé disponible en ambas variantes |
| GNSS | Chip GPS de alta sensibilidad; inicio en caliente ≤2 s, inicio en frío promedio ≤32 s; precisión de ubicación ≤30 m |
| Protocolos y Gestión Remota | Protocolos por defecto GT06/CRX3; JT808, Tianqin, Tianhe disponibles vía SMS; comunicaciones TCP/IP para informes en la nube |
| Almacenamiento y sensores | Almacenamiento de mensajes en áreas ciegas de hasta 8,000; sensor de movimiento/G; modo de reposo para ahorro de energía |
| Rango de operación y durabilidad | Temperatura de operación -20°C a +55°C; formato compacto 80 × 39 × 17 mm; peso 51 g |

## Casos de uso

- Gestión de flotas y monitoreo de rutas: seguimiento en tiempo real, eventos de ignición y historial de mensajes para optimizar rutas y cumplir con informes.
- Antirrobo e inmovilización remota: comandos de relé controlados por Plaspy pueden cortar o restablecer la energía \(con relé opcional\) para inmovilizar vehículos robados.
- Autobuses, camiones y motocicletas: el rango de entrada de 9V–90V admite implementaciones mixtas de vehículos en grandes flotas.
- Telemetría de conductor y vehículo: el sensor de movimiento/G y los datos de ignición alimentan a Plaspy para análisis de comportamiento del conductor y alertas basadas en eventos.
- Registro de áreas sin cobertura: almacena hasta 8,000 mensajes cuando está fuera de línea y los reenvía a Plaspy para mantener historiales ininterrumpidos.

## Por qué elegir este rastreador con Plaspy

El J16 es un rastreador GPS práctico, compatible con Plaspy, para organizaciones que requieren un dispositivo compacto y capaz, con soporte celular global y tolerancia de voltaje de vehículo robusta. Su rendimiento LTE CAT1 con respaldo 2G, posicionamiento rápido y buffering de mensajes en zonas sin cobertura aseguran un seguimiento en tiempo real continuo y una entrega de telemetría confiable. Las variantes \(J16A/J16B\) permiten elegir detección ACC, control de relé, micrófono y funciones SOS; los accesorios de relé opcionales habilitan funciones de inmovilización remota, clave para despliegues anti‑robo.

Cuando se integra con Plaspy, el J16 pasa a ser parte de una solución escalable de gestión de flotas: Plaspy ingiere datos de GPS y telemetría, genera alarmas por eventos de ignición o SOS, admite flujos de monitoreo de combustible cuando se conectan sensores externos y presenta informes a largo plazo para la toma de decisiones operativas. Si necesita sensores Bluetooth o datos BLE adicionales, Plaspy puede incorporar esas fuentes junto con los datos de seguimiento del J16 para ofrecer una visión telemática completa en vehículos y activos.

