---
slug: /wp/vt_10/configuration
id: vt_10-configuration
sidebar_label: Configuration
title: WP - VT-10 Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el WP VT-10 para usar con Plaspy con parámetros públicos de servidor y guía práctica
keywords:
  - WP VT-10
  - Configuración WP VT-10
  - Instalación WP VT-10
  - Configuración VT-10 Plaspy
  - Configuración rastreador GPS WP
  - Rastreo de vehículos WP VT-10
  - Configuración servidor VT-10
  - Software de rastreo WP VT-10
  - Rastreo de flotas VT-10
  - Configuración dispositivo Plaspy
---

# WP - VT-10 Configuración

Esta página describe el contexto de configuración pública para usar el rastreador GPS para vehículos WP VT-10 con Plaspy. Reúne los valores prácticos de servidor que usa Plaspy y explica los pasos típicos necesarios para apuntar un dispositivo VT-10 hacia la plataforma Plaspy. La guía se centra en los valores públicos requeridos para integrar el VT-10 y obtener visibilidad y monitoreo en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que utilice. Utilice esta página para entender los valores comunes y el flujo de trabajo; verifique cualquier comando u opción específicos del dispositivo en la documentación oficial del fabricante.

## Resumen de la configuración

El objetivo de la configuración es preparar el VT-10 para que envíe su ubicación y datos de eventos al endpoint del servidor de Plaspy para su visualización y reporte. Esto incluye establecer el endpoint y el puerto del servidor, confirmar el método de transporte, asegurar la conectividad de red y validar que Plaspy reciba los mensajes del dispositivo.

- Configure el rastreador para que informe al dominio o IP del servidor de Plaspy para que los mensajes lleguen a la plataforma.
- Establezca el puerto de transporte y seleccione UDP o TCP si el dispositivo requiere elección de transporte.
- Asegúrese de que el dispositivo tenga una conexión de datos activa y la configuración APN correcta al usar GPRS.
- Aplique y guarde la configuración del fabricante y reinicie el dispositivo si es necesario.
- Valide el reporte en Plaspy para confirmar que el VT-10 sea visible y esté enviando las actualizaciones esperadas.

## Ajustes del servidor Plaspy

Configure el VT-10 para que reporte al servidor de Plaspy usando estos valores públicos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP — configure el transporte que el dispositivo requiera
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que todos los dispositivos soportados usan el mismo puerto y la plataforma identifica el protocolo entrante de forma automática

## Requisitos típicos antes de la configuración

- Confirme que el VT-10 tenga alimentación estable y una batería de respaldo cargada si está instalada
- Instale una tarjeta SIM con un plan de datos activo y verifique que tenga disponibles los parámetros APN
- Obtenga acceso al método o software oficial de configuración del fabricante para el VT-10
- Asegúrese de disponer del IMEI o identificador del dispositivo para su validación en Plaspy
- Tenga un entorno de prueba o un recorrido corto de validación para confirmar que el dispositivo reporte correctamente al servidor

## Cómo se conecta este rastreador a Plaspy

El VT-10 utiliza su conexión GPRS para enviar mensajes de rastreo al endpoint y puerto del servidor Plaspy. Una vez configurado para apuntar a Plaspy, la plataforma recibe los paquetes entrantes y los asigna al registro del dispositivo para que la ubicación, las alertas y los registros sean visibles en la interfaz.

- El dispositivo se configura para enviar datos a d.plaspy.com o directamente a 54.85.159.138
- Los mensajes se envían por el puerto 8888 usando UDP o TCP según la configuración del dispositivo
- Plaspy usa el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador
- Los mensajes entrantes se procesan para que las actualizaciones de posición, alertas y datos básicos de eventos estén disponibles en Plaspy
- Después de la configuración, valide que el VT-10 aparezca y se actualice en la lista de dispositivos de Plaspy

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del WP VT-10 o al software del fabricante según la documentación del VT-10.
2. En los ajustes de servidor del dispositivo, introduzca el endpoint de Plaspy usando d.plaspy.com o 54.85.159.138 como dirección del servidor.
3. Configure el puerto del servidor en 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
4. Si el VT-10 requiere seleccionar transporte, elija UDP o TCP según su entorno o preferencia.
5. Ingrese cualquier información APN requerida para la tarjeta SIM y aplique o guarde la configuración en la herramienta del dispositivo.
6. Reinicie o apague y encienda el VT-10 si el fabricante lo recomienda para aplicar los nuevos ajustes de red.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con actualizaciones de ubicación recientes.

## Ejemplos de comandos de configuración

El VT-10 puede configurarse usando los métodos provistos por el fabricante, que pueden incluir comandos SMS, una herramienta de configuración para PC o una interfaz USB/serial. Los comandos y la sintaxis exacta varían según el firmware y la herramienta del proveedor, por lo que consulte el manual del WP VT-10 para el formato preciso de los comandos.

Si su proveedor ofrece plantillas de configuración por SMS, normalmente requerirán la dirección del servidor y el puerto más la selección de transporte. Mantenga los marcadores de posición para los valores APN cuando sea necesario, como [apn], [apnu] o [apnp] y reemplácelos con el APN, usuario y contraseña de su operador según corresponda.

## Notas de configuración

- Diferentes versiones de firmware o revisiones de hardware del VT-10 pueden exponer distintas opciones de configuración o sintaxis de comandos. Siempre confirme la sintaxis correcta para el firmware de su dispositivo.
- Elija UDP o TCP según la confiabilidad de la red y las restricciones de su despliegue; Plaspy acepta cualquiera de los dos transportes en el puerto compartido.
- Tenga listos los marcadores de posición de APN al usar una SIM de datos móviles; reemplace [apn] y los marcadores relacionados por los valores del operador.
- Al usar configuración por SMS, verifique el formato del comando SMS en el manual del VT-10 para evitar una mala configuración.
- Verifique el IMEI del dispositivo y que sea reconocido por Plaspy después de la configuración para asegurar la asignación correcta.

## Por qué usar Plaspy con esta configuración

Configurar el WP VT-10 para que reporte a Plaspy ofrece una forma sencilla de obtener visibilidad en tiempo real de la ubicación de vehículos y reportes básicos de eventos aprovechando la conectividad GPRS del dispositivo. Para operadores de flotas y administradores de activos, los ajustes de servidor compartidos de Plaspy simplifican la incorporación porque la plataforma utiliza el mismo puerto y detecta automáticamente el protocolo del rastreador.

Para obtener más información sobre Plaspy y cómo soporta dispositivos como el VT-10 visite https://www.plaspy.com. Para los comandos específicos más actuales del WP VT-10, notas de firmware y detalles de configuración del dispositivo, verifique la documentación oficial del fabricante en http://www.wondeproud.com/.
