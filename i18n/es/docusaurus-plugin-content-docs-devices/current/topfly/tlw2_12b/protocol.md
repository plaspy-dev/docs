---
slug: /topfly/tlw2_12b/protocol
id: tlw2_12b-protocol
sidebar_label: Protocol
title: TopFly - TLW2-12B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TopFly TLW2-12B y su comunicación con Plaspy para seguimiento confiable de remolques y activos
keywords:
  - Protocolo TopFly TLW2-12B
  - Protocolo GPS TopFly TLW2-12B
  - Protocolo de comunicación TopFly TLW2-12B
  - TLW2-12B Plaspy
  - Protocolo rastreador GPS TopFly
  - Protocolo GPS para remolques
  - Protocolo rastreador de activos Plaspy
  - Protocolo de rastreo de vehículos
  - Protocolo seguimiento cadena de frío
  - Protocolo seguimiento de flotas Plaspy
---

# TopFly - Protocolo TLW2-12B

Esta página describe el contexto público del protocolo para usar el rastreador TopFly TLW2-12B con Plaspy. Se centra en cómo el dispositivo comunica en términos generales, qué ajustes de conexión se emplean para llegar a Plaspy y qué comportamientos son relevantes al integrar el TLW2-12B en flotas y flujos de trabajo de seguimiento de activos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar a los puntos finales de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página ofrece información segura y no sensible para ayudar en la configuración y solución de problemas, y se recomienda verificar contra la documentación oficial de TopFly.

## Visión general del protocolo

El protocolo de comunicación del TLW2-12B regula cómo el rastreador se identifica ante un servidor, reporta telemetría GNSS y de sensores, y responde a solicitudes de control remoto. En la práctica, el protocolo garantiza que la ubicación, el estado de movimiento, datos de sensores BLE y eventos de entradas/salidas se empaquen y transmitan para que Plaspy pueda mostrar mapas en tiempo real, alertas e historial.

- Permite cargas regulares de ubicación y telemetría para que Plaspy reciba posición, estado de movimiento y lecturas auxiliares de sensores.
- Soporta almacenamiento en búfer y reportes masivos para que los puntos históricos se preserven y transmitan cuando se restablece la cobertura.
- Transporta identidad y estado de salud del dispositivo que Plaspy usa para asociar mensajes al activo correcto de la flota.
- Facilita comandos de control de salidas remotas y disparo de alarmas desde Plaspy hacia el dispositivo.
- Permite recoger lecturas de sensores BLE localmente y reenviarlas a Plaspy para monitoreo ambiental.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones de muchos modelos de rastreadores sin requerir selección manual del protocolo en la mayoría de los casos. Cuando un TLW2-12B está configurado para reportar al punto final de Plaspy, la plataforma identifica automáticamente el protocolo del dispositivo y procesa los mensajes entrantes para que usted pueda ver datos de seguimiento y telemetría con mínima configuración manual.

- Plaspy usa un endpoint compartido en d.plaspy.com y acepta conexiones a 54.85.159.138 para reporte de dispositivos.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, 8888, lo que simplifica la configuración en flotas con hardware mixto.
- El TLW2-12B puede configurarse para reportar por UDP o TCP al puerto 8888 según ajustes del equipo y condiciones de red.
- En la mayoría de las implementaciones no es necesario seleccionar un protocolo dentro de Plaspy si el dispositivo está apuntando al endpoint de Plaspy.
- La detección automática agiliza la incorporación mientras que aún permite ajustes a nivel de dispositivo para casar el comportamiento del firmware.

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento forman parte de la configuración pública que determina cómo el TLW2-12B llega a Plaspy. El dispositivo soporta subida por celular y puede configurarse para apuntar a Plaspy por nombre de dominio o por dirección numérica. La selección de transporte y una conectividad celular confiable son clave para la entrega oportuna de datos de seguimiento y de búfer.

- El TLW2-12B puede configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a 54.85.159.138 como dirección del servidor.
- Plaspy acepta conexiones en el mismo puerto para todos los dispositivos soportados, lo que reduce errores de configuración en despliegues con hardware mixto.
- La red celular y la configuración del operador en el dispositivo influyen en la confiabilidad del transporte y en el comportamiento de reconexión.
- Los sensores locales y BLE se recolectan en el dispositivo y se reenvían por el transporte celular cuando hay conectividad disponible.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden alterar el tiempo entre mensajes, los transportes soportados y los campos de telemetría disponibles; confirme las notas de la versión del firmware al planear despliegues.
- Las revisiones de hardware y el soporte de accesorios opcionales (por ejemplo sensores BLE o relés) pueden cambiar qué elementos de telemetría aparecen en los reportes.
- El dispositivo puede soportar múltiples modos de transporte; elegir TCP o UDP puede afectar la latencia y el comportamiento de entrega según las condiciones de la red.
- Los menús de configuración del fabricante o las herramientas de provisión pueden ser necesarios para apuntar el dispositivo a d.plaspy.com o a la IP del servidor de Plaspy en el puerto 8888.
- La capacidad de reporte en búfer y los desencadenantes de subida varían según firmware y configuración; valide el comportamiento de búfer y reconexión para escenarios de larga inactividad.
- Siempre contraste con la documentación del fabricante para entender el comportamiento específico del modelo antes de implementaciones a gran escala.

## Por qué es importante conocer el protocolo

Tener un entendimiento práctico del protocolo de comunicación del dispositivo ayuda a asegurar una integración fluida, telemetría precisa en Plaspy y un manejo confiable de incidentes. Saber cómo el TLW2-12B reporta datos y cómo Plaspy los recibe ahorra tiempo durante la puesta en marcha y al diagnosticar lagunas en el historial o reportes de sensores.

- Acelera la provisión inicial al confirmar la dirección de servidor y los ajustes de transporte correctos.
- Ayuda a interpretar por qué aparecen puntos en búfer después de la reconexión y dónde esperar retrasos.
- Mejora la resolución de problemas de conectividad al clarificar si el dispositivo o la red son el factor limitante.
- Soporta la configuración de alarmas y flujos de control remoto que dependen de la entrega oportuna de comandos.
- Facilita la planificación de estrategias de batería y alimentación al comprender la frecuencia de reporte y la carga de telemetría.

## Por qué usar Plaspy con este protocolo

Usar el TLW2-12B con Plaspy brinda a las organizaciones visibilidad persistente sobre la ubicación de remolques y activos, telemetría ambiental desde sensores BLE y control remoto de salidas para flujos de alarmas e inmovilización. La amplia batería del TLW2-12B, sus funciones de búfer y su formato robusto se alinean con las capacidades de Plaspy en seguimiento en tiempo real, notificaciones e informes históricos para mantener la supervisión operativa tanto en carretera como en patios de almacenamiento.

Si desea saber más sobre cómo Plaspy soporta rastreadores como el TLW2-12B y explorar las funciones de la plataforma, visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, comportamiento de firmware y guías del fabricante, verifique la información en la documentación oficial de TopFly en https://www.topflytech.com/ .
