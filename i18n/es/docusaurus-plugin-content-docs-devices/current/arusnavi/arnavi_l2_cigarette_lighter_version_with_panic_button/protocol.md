---
slug: /arusnavi/arnavi_l2_cigarette_lighter_version_with_panic_button/protocol
id: arnavi_l2_cigarette_lighter_version_with_panic_button-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi L2 (cigarette lighter version with panic button) Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para el rastreador Arnavi L2 versión para encendedor con botón de pánico y su comunicación con Plaspy
keywords:
  - Protocolo Arusnavi Arnavi L2
  - Comunicación rastreador GPS Arnavi L2
  - Compatibilidad Arnavi L2 con Plaspy
  - Seguimiento botón de pánico Arnavi L2
  - Protocolo rastreador GPS enchufe de cigarrillo
  - Resumen protocolo rastreador Arusnavi
  - Telemetría y eventos Arnavi L2
  - Integración de dispositivo Plaspy
  - Rastreador GNSS para gestión de flotas
  - Integración sensores BLE Arnavi L2
---

# Arusnavi - Arnavi L2 (versión para encendedor con botón de pánico) Protocolo

Esta página resume el contexto público del protocolo para usar el rastreador Arusnavi Arnavi L2 en su versión para encendedor con botón de pánico junto con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos no sensibles y neutrales desde el punto de vista de implementación, para ayudar a gerentes de flota e integradores técnicos a comprender el comportamiento de conexión e informes sin exponer detalles privados.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según el firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento enfatiza los roles generales del protocolo y consideraciones prácticas de configuración en lugar de formatos de paquete de bajo nivel.

## Resumen del protocolo

El protocolo de comunicación del Arnavi L2 permite que el dispositivo entregue posiciones GNSS, telemetría, eventos y datos de sensores a un servidor remoto para su uso en Plaspy. Define cómo el rastreador se identifica, reporta telemetría y alarmas, y sube registros almacenados tras periodos sin conexión.

- Proporciona posiciones GNSS periódicas y telemetría de movimiento para visibilidad en tiempo real en Plaspy.
- Envía notificaciones de eventos como pulsaciones del botón de pánico, alertas de remolque o impacto desde el acelerómetro y cambios de ignición.
- Transmite lecturas de sensores BLE y telemetría de accesorios para asociarlas al flujo de datos del dispositivo.
- Sube datos del registro tipo caja negra almacenados localmente cuando se restablece la conectividad para asegurar la continuidad del historial de viajes.
- Soporta flujos de trabajo de configuración remota y actualización de firmware mediante endpoints configurados por el servidor.
- Puede estar disponible en varias variantes de protocolo de servidor que el fabricante soporta, incluyendo INTERNAL EXTERNAL USER_AG y EGTS según la configuración del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo correcto para cada rastreador que reporta. Cuando el Arnavi L2 está configurado para reportar a Plaspy, por lo general no se requiere seleccionar el protocolo manualmente dentro de la plataforma.

- El dominio de servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones entrantes de rastreadores y utiliza el mismo puerto para todos los dispositivos.
- Los dispositivos configurados para apuntar a d.plaspy.com o a la IP del servidor y usar el transporte soportado serán aceptados por Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo se conecta y comienza a reportar.
- Los usuarios deben asegurarse de que el dispositivo esté configurado para reportar al endpoint de Plaspy y que el APN de la SIM y el acceso a la red sean válidos.
- Si un dispositivo soporta múltiples protocolos del fabricante, confirme la configuración de protocolo activo en el dispositivo para que coincida con el comportamiento esperado.

## Transporte y contexto de conexión

El transporte de conexión para el Arnavi L2 está determinado por las capacidades del módem del dispositivo y su configuración por parte del fabricante. El rastreador puede configurarse para usar transporte UDP o TCP según el soporte y los requisitos.

- El Arnavi L2 puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los dispositivos pueden apuntar al host de reporte de Plaspy usando d.plaspy.com o la IP numérica del servidor 54.85.159.138.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, lo que simplifica la configuración de firewall y del servidor.
- La selección del transporte puede afectar el comportamiento en redes móviles y reglas de firewall, por lo que conviene elegir el transporte que mejor se adapte a las limitaciones del operador y la infraestructura.
- Verifique que el APN del dispositivo, el estado de la SIM y la conectividad GPRS estén operativos para permitir reportes confiables.
- Las interfaces BLE y locales son independientes del transporte celular y se usan para datos adicionales de sensores y configuración local.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y de configuración pueden cambiar las funciones disponibles del protocolo o los nombres de protocolo del servidor y deben validarse para cada lote de dispositivos.
- Las revisiones de hardware pueden introducir diferencias en el módem o en los sensores que afecten la cadencia de reportes o el manejo de eventos.
- El dispositivo soporta múltiples protocolos de servidor del fabricante como INTERNAL EXTERNAL USER_AG y EGTS que pueden ser seleccionables en el equipo.
- La elección de transporte entre UDP y TCP puede afectar las características de entrega y debe coordinarse con la configuración del operador y del servidor.
- La configuración remota y las actualizaciones de firmware pueden modificar el comportamiento de reporte del dispositivo; verifique las políticas de actualización antes de un despliegue a gran escala.
- Confirme siempre la compatibilidad y los ajustes recomendados con la documentación oficial de Arusnavi para la revisión específica de firmware y hardware.

## Por qué es importante entender el protocolo

Conocer cómo reporta el Arnavi L2 y qué ajustes de transporte y protocolo utiliza ayuda a asegurar una configuración fiable, agilizar la resolución de problemas y garantizar un funcionamiento predecible a largo plazo con Plaspy.

- Garantiza que los dispositivos estén configurados para reportar al endpoint correcto de Plaspy usando d.plaspy.com o la IP del servidor.
- Ayuda a diagnosticar problemas de conectividad relacionados con el APN, restricciones del operador o reglas de firewall para el puerto 8888.
- Aclara cómo se deben visualizar en Plaspy eventos como pulsaciones del botón de pánico y alertas del acelerómetro.
- Orienta la decisión entre UDP y TCP para ajustar expectativas de fiabilidad y latencia.
- Permite planificar el comportamiento de subida de registros offline para que el historial de viajes quede completo tras huecos de cobertura.
- Facilita la coordinación entre la configuración en el vehículo y los ajustes de la cuenta Plaspy para despliegues a escala de flota.

## Por qué usar Plaspy con este protocolo

Usar el Arnavi L2 con Plaspy ofrece a las organizaciones una forma integrada de llevar telemetría plug and play, alertas de pánico, datos de sensores BLE y registro offline a una sola plataforma de gestión de flotas. La forma de enchufe para encendedor y el botón de pánico integrado hacen del dispositivo una opción práctica para alquileres de corta duración, rideshare y flotas mixtas donde la instalación y remoción rápida son prioritarias.

Plaspy simplifica la incorporación de dispositivos exponiendo un único endpoint de reporte en d.plaspy.com o 54.85.159.138 en el puerto 8888 y detectando automáticamente el protocolo del rastreador para que los dispositivos configurados comiencen a reportar sin selección manual de protocolo. Para saber más sobre cómo Plaspy puede trabajar con su flota y el Arnavi L2, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información específica de protocolo y firmware más reciente en el sitio del fabricante https://www.arusnavi.ru.
