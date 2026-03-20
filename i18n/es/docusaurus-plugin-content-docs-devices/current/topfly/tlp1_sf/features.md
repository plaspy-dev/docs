---
slug: /topfly/tlp1_sf/features
id: tlp1_sf-features
sidebar_label: Features
title: TopFly - TLP1-SF Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador solar TopFly TLP1-SF y su integración con Plaspy para visibilidad de activos y flotas
keywords:
  - TopFly TLP1-SF
  - funciones TopFly TLP1-SF
  - rastreador GPS TopFly
  - rastreador GPS solar
  - rastreador de activos IP67
  - seguimiento de remolques
  - seguimiento de flotas
  - rastreo en tiempo real
  - almacenamiento de ubicaciones en búfer
  - rastreador compatible con Plaspy
---

# TopFly - Características del TLP1-SF

Esta página ofrece una descripción pública de las funcionalidades del TopFly TLP1-SF relevantes para su uso con Plaspy. Resume las capacidades prácticas, los usos operativos habituales y cómo los eventos y los datos de ubicación del dispositivo se reflejan en la plataforma Plaspy para visibilidad y monitoreo.

La disponibilidad exacta de funciones y su comportamiento puede variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para la configuración a nivel de dispositivo, el comportamiento específico de firmware o detalles regulatorios, consulte la documentación oficial de TopFly y las notas de la versión.

## Resumen de funciones

El TopFly TLP1-SF es un rastreador GPS 4G LTE con asistencia solar, diseñado para despliegues prolongados en activos como remolques y camiones. Está pensado para ofrecer baja necesidad de mantenimiento, reportes de posición confiables y resistencia para uso exterior.

- Soporte de energía solar combinado con una gran batería interna recargable Li‑Polímero para operación prolongada sin supervisión.
- Reportes de ubicación en tiempo real con intervalos de hasta 3 segundos y una amplia memoria interna que almacena hasta 60,000 puntos de ubicación.
- Alertas por movimiento, alarma de extracción, avisos de batería baja y capacidades de geocercas para monitoreo basado en eventos.
- Carcasa robusta con clasificación IP67 probada para exposición prolongada al agua y múltiples opciones de montaje flexibles para remolques y activos de campo.
- Soporte multiconstelación GNSS para posicionamiento consistente mediante GPS, GLONASS, Galileo y Beidou.

## Funciones principales del TopFly - TLP1-SF

- Soporte de carga solar combinado con una batería interna recargable Li‑Polímero de 4800 mAh para una larga autonomía.
- Rastreo en tiempo real con intervalos de reporte configurables de hasta 3 segundos para actualizaciones de alta frecuencia.
- Memoria de buffer local capaz de almacenar hasta 60,000 puntos de ubicación para mantener el historial durante cortes de red.
- Detección de movimiento y alertas por movimiento para notificar cuando un activo comienza a moverse o permanece inmóvil.
- Soporte de geocercas para generar eventos al entrar o salir de zonas predefinidas.
- Alarma de extracción para señalizar desprendimientos no autorizados o manipulación.
- Carcasa resistente IP67 y múltiples métodos de montaje, incluidos imanes, tornillos y adhesivo de alta resistencia para instalaciones flexibles.
- Soporte para múltiples métodos de entrega de datos, incluyendo TCP, UDP, MQTT y SMS como opciones de comunicación.

## Cómo funcionan estas funciones con Plaspy

Plaspy puede ingerir y mostrar las actualizaciones de posición y los mensajes de eventos del TLP1-SF para que los administradores de flota y operadores monitoreen activos en casi tiempo real y revisen movimientos históricos a partir de datos almacenados en buffer. Plaspy detecta automáticamente el protocolo del rastreador y mapea los datos entrantes a eventos y telemetría de la plataforma.

- Las actualizaciones de posición en tiempo real aparecen en los mapas de Plaspy y pueden visualizarse con tasas de refresco configurables para coincidir con el intervalo de reporte del dispositivo.
- Los puntos de ubicación almacenados en buffer y enviados tras la reconexión se usan para reconstruir trayectorias históricas en Plaspy, permitiendo un historial de movimiento continuo.
- Las alertas de movimiento, las alarmas de extracción y los avisos de batería baja se traducen en eventos y notificaciones dentro de la plataforma para facilitar la respuesta operativa.
- Los eventos de geocerca generados por el dispositivo pueden mostrarse junto con las herramientas de geovallas de Plaspy para respaldar el monitoreo de límites.
- Estado básico del dispositivo, como nivel de batería e indicadores de red/GNSS reportados por el rastreador, puede visualizarse en los paneles de estado de dispositivo de Plaspy para supervisión.

## Casos de uso típicos

- Seguimiento a largo plazo de remolques y contenedores donde la recarga solar reduce las visitas de mantenimiento.
- Visibilidad de flotas para camiones y activos que pasan largos periodos al aire libre o fuera de cobertura.
- Detección de robo o manipulación mediante alarmas de extracción y alertas de movimiento.
- Reconstrucción de rutas y análisis post‑viaje usando el almacenamiento en buffer de ubicaciones.
- Activos remotos que requieren reportes de posición resilientes ante coberturas celulares intermitentes.
- Reglas operativas basadas en geocercas para monitorizar entrada y salida de sitios.

## Notas sobre disponibilidad de funciones

- El comportamiento de funciones como intervalos de reporte y umbrales de alarmas puede depender del firmware instalado y de las configuraciones del dispositivo.
- Las revisiones de hardware y las variantes regionales pueden afectar las bandas celulares soportadas y el estado de certificación.
- Algunas capacidades requieren una instalación y ubicación correctas del dispositivo y su panel solar para asegurar el rendimiento esperado de la batería y del GNSS.
- El comportamiento relacionado con la red (por ejemplo, cómo se transmiten los datos en buffer tras la reconexión) se ve afectado por la configuración y los métodos de red disponibles como TCP, UDP, MQTT o SMS.
- Verifique la certificación y la compatibilidad con operadores en su región, ya que algunas aprobaciones de red pueden estar pendientes o ser específicas por región.

## Por qué usar Plaspy con estas funciones

Usar el TopFly TLP1-SF con Plaspy ofrece una vía directa para combinar hardware de rastreo con larga autonomía solar con una plataforma centrada en visibilidad de ubicaciones y supervisión operativa. Plaspy recopila las ubicaciones y los mensajes de evento del dispositivo para que su equipo pueda monitorear alertas de movimiento, revisar trayectos almacenados tras cortes y mantener visibilidad continua sobre una flota dispersa.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para especificaciones de dispositivo, notas de firmware y detalles de certificación más actuales y oficiales, verifique la información en el sitio del fabricante https://www.topflytech.com/ ya que las funciones del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo.
