---
slug: /sinotrack/st_901al
id: st_901al
sidebar_label: ST-901AL
sidebar_class_name: menu_item_tracker
---
# SinoTrack - ST-901AL

![ST-901AL](./tracker.jpg)

El SinoTrack ST-901AL es un rastreador GPS con cable 4G LTE diseñado para un monitoreo y seguridad fiables de vehículos. Diseñado para instalaciones profesionales, el ST-901AL informa la ubicación vía GPRS y SMS, incluye una entrada ACC \(encendido\) para telemetría precisa del motor encendido/apagado y admite corte remoto a través de un relé externo — convirtiéndolo en una excelente opción para despliegues compatibles con Plaspy que requieren seguimiento en tiempo real y control antirrobo.

El dispositivo es compatible con Plaspy porque expone ajustes configurables de IP/puerto y APN y admite protocolos estándar de reporte por SMS/GPRS, lo que permite una integración fluida con plataformas de terceros como Plaspy, así como con la propia app SinoTrack PRO y el portal web VIP.SINOTRACK de SinoTrack. Los clientes pueden instalar su propia SIM, configurar credenciales APN y activar el seguimiento en línea mediante comandos SMS para una configuración rápida en el campo.

## Principales características

- Rastreador GPS con cable 4G LTE compatible con quad-band GSM para soporte de red amplio y seguimiento en tiempo real constante.
- Entrada ACC para detección de encendido y telemetría precisa del estado del motor, mejorando los informes para la gestión de flotas y el análisis de uso.
- Capacidad de inmovilización remota mediante un relé externo para cortar circuitos de combustible o energía, con fines antirrobo y respuesta ante uso no autorizado.
- Múltiples canales de reporte: ubicación en tiempo real vía GPRS y SMS para una conectividad resiliente en diversas condiciones de red.
- Ajustes configurables de IP/puerto y APN, además de comandos SMS documentados para una integración rápida con Plaspy u otras plataformas de rastreo.
- Acceso gratuito de por vida a la app móvil SinoTrack PRO y al portal web VIP.SINOTRACK \(la SIM no está incluida\) para la gestión opcional de la plataforma.
- Guía de instalación y referencias de cableado ilustradas disponibles para coches, motocicletas y una amplia gama de tipos de vehículos.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el ST-901AL envía datos de ubicación y alarmas a través de GPRS al IP/puerto de servidor configurados. Dado que el rastreador admite ajustes configurables de APN y servidor vía SMS, puedes dirigir el tráfico del dispositivo al punto de ingesta de Plaspy y recibir seguimiento en tiempo real, alertas y telemetría en el panel de Plaspy o mediante las API de Plaspy.

- Actualizaciones de ubicación y telemetría en tiempo real vía GPRS \(primario\) y SMS \(alternativo\) para visibilidad continua.
- Detección ACC \(encendido\) — Plaspy puede utilizar eventos de encendido para crear informes basados en el encendido y analítica de tiempo de conducción.
- Control remoto del inmovilizador/rela — activar un corte de combustible o energía mediante comandos emitidos por Plaspy \(se requiere cableado de relé externo y las comprobaciones de seguridad/legalidad correspondientes\).
- Notificaciones de alarmas y eventos — exceso de velocidad, violaciones de números autorizados y los intervalos de guardado de datos de detención/inicio se reportan y pueden convertirse en alertas de Plaspy.
- Configuración de la plataforma por SMS — los dispositivos pueden cambiar su destino hacia Plaspy enviando las secuencias SMS documentadas para configurar APN, IP/puerto del servidor.

## Resumen técnico

| Modelo | SinoTrack ST-901AL |
| --- | --- |
| Conectividad | 4G LTE \(con fallback GSM cuádruple banda\), informes por SMS y GPRS |
| Bandas | GSM cuádruple banda y redes 4G compatibles \(soporte de red específico del modelo\) |
| Alimentación & Batería | Alimentación por vehículo con cable; no se especifica batería interna en la documentación \(diseñado para cableado en línea\) |
| Interfaces | Entrada ACC \(encendido\); salida de control de relé para corte remoto \(se requiere relé externo\); configuración de número autorizado vía SMS |
| GNSS | Posicionamiento por satélite GPS con reporte en tiempo real \(se admite reporte de ubicación por GPS/GPRS/SMS\) |
| Bluetooth | No se indican sensores Bluetooth/BLE para este modelo |
| Gestión remota | Comandos de configuración por SMS para APN, IP/puerto del servidor y manejo de IMEI; compatible con SinoTrack PRO y VIP.SINOTRACK \(servidor predeterminado VIP.SINOTRACK; ejemplo IP 45.112.204.242:8090\) |
| SIM & APN | Tarjeta SIM no incluida — se requieren ajustes de APN y configuraciones de operador por parte del usuario |
| Garantía & Soporte | Garantía de 2 años proporcionada por el fabricante y soporte de instalación/configuración 24 horas |
| Factor de forma | Rastreador de vehículo compacto con cable para instalación en línea \(coches, camiones, motocicletas, scooters\) |

## Casos de uso

- Gestión de flotas: supervisar la ubicación de vehículos, horarios de encendido y eventos de exceso de velocidad para taxis, camiones de reparto y flotas de servicio.
- Protección antirrobo: utilizar el relé externo para deshabilitar de forma remota el suministro de combustible o energía en vehículos robados o mal usados cuando se coordina con alertas de Plaspy.
- Monitoreo de vehículos privados: configuración sencilla para coches o motocicletas para rastrear recorridos y recibir notificaciones de alarma en tiempo real.
- Gestión de dos ruedas y micromovilidad: instalaciones con cableado y pautas de montaje hacen que ST-901AL sea adecuado para e-bikes y scooters con alimentación eléctrica en línea.
- Informes basados en telemetría: eventos de encendido y datos intermedios guardados mientras está detenido proporcionan archivos telemáticos más completos para análisis operativos.

## Por qué elegir este rastreador con Plaspy

El SinoTrack ST-901AL es una opción práctica y compatible con Plaspy para organizaciones e individuos que requieren seguimiento en tiempo real confiable y control antirrobo sin quedar atados a suscripción. Dado que el dispositivo admite APN y configuración de IP/puerto del servidor vía SMS, se integra de forma limpia con Plaspy u otros sistemas back-end, brindando a los gestores de flotas e instaladores flexibilidad al implementar telemetría, flujos de monitoreo de combustible e informes basados en el encendido.

Elija el ST-901AL cuando necesite un rastreador GPS con cable, de grado profesional, con métodos de reporte probados \(GPRS/SMS\), detección ACC/encendido y capacidad de inmovilizador controlado por relé, respaldados por la documentación del fabricante, guías de instalación y una garantía de dos años. Para los usuarios de Plaspy, esto significa una incorporación rápida, telemetría predecible y una ruta segura para implementar flujos antirrobo y gestión de flotas, manteniendo el control sobre la selección de la SIM y la configuración de APN.

