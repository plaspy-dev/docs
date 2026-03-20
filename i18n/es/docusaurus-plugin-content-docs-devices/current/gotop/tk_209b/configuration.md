---
slug: /gotop/tk_209b/configuration
id: tk_209b-configuration
sidebar_label: Configuration
title: GOTOP - TK-209B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GOTOP TK-209B y cómo apuntarlo a Plaspy para rastreo
keywords:
  - Configuración GOTOP TK-209B
  - Configuración TK-209B para Plaspy
  - Configuración rastreador GPS GOTOP
  - Ajustes de servidor TK-209B
  - Integración rastreador GPS con Plaspy
  - Configuración rastreo de vehículos
  - Configuración rastreador de activos
  - Configuración GPRS TK-209B
  - Guía rastreador GOTOP
  - Configuración plataforma de rastreo
---

# GOTOP - TK-209B Configuración

Esta página describe el contexto público de configuración para usar el GOTOP TK-209B con Plaspy. Resume los ajustes de servidor prácticos y los pasos principales necesarios para apuntar el rastreador a Plaspy, de modo que el dispositivo pueda enviar ubicación y eventos básicos a la plataforma. Las instrucciones usan valores públicos de servidor de Plaspy y las capacidades del TK-209B según su especificación pública.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. Use esta página para preparar el dispositivo para integrarlo con Plaspy y verifique los detalles contra las instrucciones del fabricante para el TK-209B.

## Resumen de configuración

Configurar el TK-209B para Plaspy prepara el rastreador para comunicarse con un punto final de servidor centralizado, de modo que las ubicaciones y las alarmas sean visibles dentro de la plataforma Plaspy. El proceso se centra en indicar al dispositivo dónde enviar sus datos, seleccionar el transporte y validar la conectividad para que el rastreador aparezca en su cuenta de Plaspy.

- Apuntar el rastreador al punto final del servidor de Plaspy para que los paquetes de datos lleguen a la plataforma.
- Seleccionar transporte TCP o UDP según lo requiera el firmware del dispositivo y las condiciones de la red.
- Configurar el puerto común de Plaspy para que el dispositivo envíe telemetría al socket correcto.
- Validar la conectividad y confirmar que los mensajes de ubicación y alarma llegan a Plaspy.
- Usar las herramientas del fabricante o comandos SMS proporcionados por GOTOP cuando estén disponibles para aplicar la configuración.

## Ajustes del servidor Plaspy

Al configurar el TK-209B para trabajar con Plaspy, use los siguientes ajustes públicos de servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador al recibir datos

Todos los dispositivos compatibles con Plaspy usan el mismo puerto y la plataforma realiza la detección automática de protocolo, por lo que solo necesita apuntar el rastreador al host y puerto correctos.

## Requisitos típicos antes de la configuración

- Un TK-209B con batería cargada o conectado a una fuente de alimentación suficiente para la configuración inicial.
- Una SIM válida provisionada para datos si utilizará seguimiento por GPRS, o capaz de recibir SMS si la configuración será por SMS.
- Acceso al método oficial de configuración GOTOP o al software del proveedor para el TK-209B.
- Cobertura de red en las bandas compatibles con el rastreador.
- El IMEI del dispositivo y cualquier identificador de cuenta requerido para añadir el rastreador a Plaspy.
- Conocimiento de la versión de firmware y notas del proveedor que puedan afectar la sintaxis de los comandos.

## Cómo se conecta este rastreador a Plaspy

El TK-209B envía mensajes de ubicación y eventos a un servidor remoto para que Plaspy pueda mostrar posición, eventos de movimiento y alarmas para monitoreo operativo. Para la integración, el rastreador se configura para reportar al punto final y puerto compartidos de Plaspy usando el transporte soportado por su firmware.

- Configure el dispositivo para enviar datos a d.plaspy.com o a la IP 54.85.159.138.
- Ajuste el puerto del dispositivo a 8888 para dirigir los paquetes al puerto de escucha de Plaspy.
- Elija transporte UDP o TCP en el dispositivo si el firmware exige seleccionar uno.
- Plaspy realiza la detección automática del protocolo cuando llegan los mensajes del dispositivo, lo que simplifica la configuración en la plataforma.
- Dependiendo de la configuración del TK-209B, GPRS suele usarse para informes en vivo mientras que SMS puede servir para comandos simples o configuración como respaldo.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración GOTOP o al software para el TK-209B proporcionado por el proveedor.
2. Ingrese la dirección del servidor de Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 para coincidir con el puerto de escucha de Plaspy.
4. Seleccione UDP o TCP si el dispositivo requiere elegir transporte.
5. Guarde o aplique la configuración usando la herramienta o la interfaz de comandos del dispositivo.
6. Reinicie el dispositivo si el firmware requiere un reinicio para que los ajustes surtan efecto.
7. Verifique que el dispositivo esté reportando a Plaspy comprobando la llegada de datos en la plataforma y la detección automática del protocolo.

## Comandos de ejemplo de configuración

La sintaxis exacta de los comandos para el GOTOP TK-209B depende del firmware del dispositivo y de las herramientas del fabricante que utilice. Muchos dispositivos GOTOP soportan configuración via software del proveedor, una interfaz web o cadenas de comando por SMS. Dado que la sintaxis del fabricante puede variar, consulte la documentación de GOTOP o la herramienta del proveedor para los comandos precisos para establecer un dominio o IP de servidor y un puerto.

Al usar un método basado en SMS del proveedor, normalmente verá marcadores de posición para APN u otros parámetros de red como [apn], [apnu] o [apnp]. Mantenga esos marcadores y reemplácelos con los valores suministrados por su operador móvil. Explicación de los marcadores de ejemplo:

- [apn] es el APN de datos proporcionado por el operador SIM
- [apnu] es el nombre de usuario del APN si se requiere
- [apnp] es la contraseña del APN si se requiere

Si obtiene comandos proporcionados por el fabricante para el TK-209B, aplíquelos en el orden especificado por GOTOP y verifique la conectividad a d.plaspy.com puerto 8888 por UDP o TCP.

## Notas de configuración

- Las diferencias de firmware entre lotes de producción pueden cambiar la sintaxis exacta de los comandos de configuración o la disposición de menús en el software del proveedor; siempre verifique la documentación del GOTOP TK-209B correspondiente a su versión de firmware.
- La selección entre TCP y UDP puede afectar el comportamiento de entrega y la traversía de firewalls; pruebe ambos transportes si la conectividad es intermitente.
- La configuración por SMS puede ser útil cuando GPRS aún no está activo, pero el seguimiento en tiempo real hacia Plaspy requiere una sesión de datos GPRS dirigida a d.plaspy.com 54.85.159.138 en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo entrante, lo que reduce los pasos de configuración en la plataforma.
- Las buenas prácticas de instalación incluyen confirmar los ajustes del APN de la SIM y realizar una prueba de conectividad inicial antes de la instalación final.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP TK-209B con Plaspy ofrece a las organizaciones una forma directa de centralizar la visibilidad de ubicación, alarmas y movimiento para tareas de monitoreo de larga duración. Las características del hardware del TK-209B, como su larga autonomía en espera y su carcasa resistente al agua, lo hacen apto para despliegues en activos y vehículos donde se requiere reporte periódico a una plataforma unificada.

Para saber más sobre Plaspy y cómo acepta datos de rastreadores compatibles visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware y detalles del fabricante, verifique siempre las instrucciones actuales en el sitio de GOTOP https://www.gotop.cc/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
