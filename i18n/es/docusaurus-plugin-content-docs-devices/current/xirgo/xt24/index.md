---
slug: /xirgo/xt24
id: xt24
sidebar_label: XT24
sidebar_class_name: menu_item_tracker
---
# Xirgo - XT24

![XT24](./tracker.webp)

# XT24 OBD GPS Tracker

El XT24 es un rastreador OBD GPS compacto, de instalación rápida y plug-and-play, diseñado para una instalación autónoma ágil en vehículos de pasajeros y de uso ligero. Con un motor GPS integrado, antenas celulares y GPS, y una interfaz OBD directa, el XT24 ofrece localización fiable del vehículo, velocidad y telemetría del bus del vehículo para seguimiento en tiempo real y gestión de flotas.

El dispositivo es compatible con Plaspy desde fábrica: lee parámetros OBD-II estándar y muchos PIDs propietarios de OEM, reporta la posición GNSS vía LTE Cat M1 y proporciona datos de movimiento a partir de un acelerómetro de 3 ejes. Use el XT24 para mejorar la visibilidad de la flota, implementar flujos de trabajo antirrobo y capturar telemetría del vehículo, como el estado de encendido y PIDs relacionados con el combustible cuando estén disponibles desde el sistema OBD del vehículo.

## Key Highlights

- Instalación OBD plug-and-play: se instala en segundos para un despliegue rápido en flotas.
- Compatible con Plaspy: transmite telemetría GPS en tiempo real y telemetría OBD para una integración fluida con la plataforma.
- Conectividad celular LTE Cat M1 para comunicaciones eficientes de área amplia y bajo consumo de energía.
- Receptor GPS integrado y antena para reportes de posición y velocidad confiables.
- Acelerómetro de 3 ejes y detector de movimiento para detección de movimiento, impactos y manipulación.
- Admite el estándar OBD abierto, además de muchos parámetros propietarios de OEM para obtener datos del vehículo más completos.
- Indicadores LED para la señal GPS, registro GSM y comunicación OBD para simplificar la puesta en servicio.

## How It Works with Plaspy

El XT24 envía la ubicación y los datos del bus del vehículo directamente a Plaspy mediante LTE Cat M1. Una vez conectado al puerto OBD del vehículo, la unidad consulta la ECU del vehículo para obtener los PIDs OBD compatibles y combina esos flujos de telemetría con la posición GNSS y los eventos del acelerómetro. Plaspy ingiere estos mensajes para proporcionar seguimiento en tiempo real, alertas, historial de rutas e informes de flota.

- Actualizaciones de ubicación y telemetría en tiempo real: la posición GNSS y los parámetros del vehículo se envían a Plaspy para seguimiento en vivo.
- Estado de encendido y PIDs relacionados con el motor: leídos desde el puerto OBD cuando el vehículo proporcione esos parámetros.
- Monitoreo de combustible y datos de diagnóstico: Plaspy puede mostrar PIDs OBD relacionados con el combustible cuando el vehículo los admita.
- Eventos de movimiento e impactos: el acelerómetro de 3 ejes permite activar alertas de movimiento, frenadas bruscas o detección de colisiones.
- Flujos de trabajo antirrobo e inmovilización: empareje la telemetría XT24 con controles de Plaspy y hardware inmovilizador compatible para respuesta remota.

## Resumen técnico

| Modelo | XT24 |
| :--- | --- |
| Conectividad | LTE Cat M1 |
| Bandas | No especificadas |
| Alimentación y batería | Alimentado a través del puerto OBD del vehículo; batería de respaldo Li‑Ion opcional de 250 mAh |
| Interfaces | Interfaz OBD integrada; admite estándares OBD abiertos y muchos parámetros propietarios de OEM |
| GNSS | Receptor GPS integrado y antena |
| Sensores | Acelerómetro de 3 ejes y detector de movimiento |
| Indicadores LED | Señal GPS, registro GSM, comunicación OBD |
| Gestión remota | No especificado \(consulte al proveedor para herramientas FOTA/remotas\) |
| Certificaciones | FCC, IC e ISED certificadas |
| Factor de forma | Factor de forma OBD compacto para vehículos de pasajeros y ligeros |

## Casos de uso

- Gestión de flotas: supervisar la ubicación del vehículo, el kilometraje y la telemetría OBD para optimizar rutas y la utilización.
- Monitoreo antirobo: recibir alertas de movimiento y la posición en tiempo real para facilitar la recuperación y respuesta rápidas.
- Diagnóstico del vehículo y monitoreo de combustible: recopilar PIDs OBD para métricas relacionadas con el combustible y el estado del motor cuando estén disponibles.
- Comportamiento y seguridad del conductor: usar eventos del acelerómetro para detectar frenadas bruscas o colisiones para entrenamiento y soporte en reclamaciones.
- Despliegues rápidos: el diseño plug-and-play simplifica implementaciones a gran escala para flotas de vehículos de pasajeros y ligeros.

## Por qué elegir este rastreador con Plaspy

El XT24 combina una instalación simple con la profundidad de datos necesaria para los programas telemáticos modernos. Su acceso directo a OBD permite a Plaspy mostrar tanto el seguimiento en tiempo real basado en GNSS como la telemetría del bus del vehículo, como el estado de ignición y los parámetros relacionados con el combustible cuando estén disponibles desde el vehículo. LTE Cat M1 ofrece conectividad celular eficiente para reportes continuos sin la sobrecarga de energía de los módulos 4G más antiguos.

Para operadores y gestores de flotas que buscan escalar, el XT24 reduce el tiempo de instalación y proporciona las entradas esenciales para Plaspy que permiten obtener insights accionables — desde la optimización de rutas y el monitoreo de combustible hasta alertas antirobo y disparadores de mantenimiento basados en telemetría. Cuando se requieren características adicionales como control remoto del inmovilizador o sensores Bluetooth, Plaspy puede integrar los datos del XT24 con periféricos y servicios compatibles para construir una solución completa de seguridad y diagnóstico del vehículo.

