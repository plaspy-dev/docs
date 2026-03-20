---
slug: /xirgo/xt24/configuration
id: xt24-configuration
sidebar_label: Configuration
title: Xirgo - XT24 Configuration
sidebar_class_name: menu_item_tracker
description: Notas públicas de configuración del Xirgo XT24 para Plaspy con valores de servidor y comandos SMS para despliegue rápido
keywords:
  - Configuración Xirgo XT24
  - Configuración XT24
  - Configuración servidor Xirgo XT24
  - Configuración Plaspy Xirgo XT24
  - Configuración GPS XT24
  - Configuración rastreador Xirgo
  - Rastreo vehicular XT24
  - Configuración OBD GPS XT24
  - Configuración rastreador Plaspy
  - Rastreo de flotas XT24
---

# Xirgo - Configuración del XT24

Esta página documenta el contexto público de configuración para usar el rastreador OBD GPS Xirgo XT24 con Plaspy. Describe los ajustes compartidos del servidor Plaspy a los que debe apuntar el dispositivo, resume pasos prácticos de configuración y reproduce los comandos de configuración vía SMS disponibles públicamente que se emplean comúnmente para preparar la unidad para su integración con Plaspy.

Plaspy utiliza un único endpoint y puerto compartido entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador del lado del servidor. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; verifique los detalles específicos del dispositivo con la documentación oficial de Xirgo y con las herramientas que utilice su instalador.

## Resumen de configuración

Configurar el XT24 para Plaspy prepara el rastreador para enviar posiciones GNSS y telemetría OBD a la plataforma Plaspy de forma fiable. El proceso normalmente establece el APN del operador cuando es necesario, configura el servidor GPRS/packet hacia Plaspy y valida el transporte y el reporte después de guardar y reiniciar el equipo.

- Apunte el XT24 al endpoint del servidor Plaspy para que pueda enviar posiciones y telemetría OBD a la plataforma.
- Configure el APN celular y cualquier parámetro requerido por la SIM para la conectividad de datos.
- Establezca la entrada del servidor del dispositivo con la IP o dominio de Plaspy en el puerto compartido de Plaspy.
- Verifique la selección del transporte (UDP o TCP) y confirme que el rastreador usa el transporte configurado para conectarse a Plaspy.
- Confirme que el dispositivo sea visible y esté reportando en Plaspy tras aplicar los cambios y reiniciarlo si es necesario.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported; configure the device to use one of these transports if required
- Protocol detection: Plaspy automatically detects the tracker protocol on incoming connections

Nota: Todos los dispositivos en Plaspy usan el mismo puerto, y la plataforma detectará el protocolo de forma automática una vez que los datos lleguen a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

## Requisitos habituales antes de la configuración

- Confirme que el XT24 recibe alimentación desde el puerto OBD del vehículo y que cualquier batería de respaldo esté cargada si está instalada.
- Asegúrese de que el dispositivo tenga una SIM celular funcional con un plan de datos activo y los detalles APN correctos.
- Tenga acceso al método de configuración oficial de Xirgo soportado por su unidad, como SMS, herramienta del proveedor o interfaz de instalador.
- Conozca las credenciales del APN del operador y cualquier nombre de usuario o contraseña requeridos por su SIM.
- Pueda reiniciar o cortar y volver la alimentación del dispositivo después de aplicar la configuración para asegurar que los ajustes entren en vigor.
- Confirme que dispone del IMEI o identificador del rastreador para validarlo en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El XT24 reporta posición GNSS y telemetría OBD a Plaspy enviando sus datos al endpoint compartido de Plaspy usando el transporte configurado. Plaspy ingiere esos mensajes y determina automáticamente el protocolo del rastreador para que la telemetría aparezca en el flujo correcto del dispositivo.

- El rastreador se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Los datos pueden enviarse por UDP o TCP según la configuración del equipo y las preferencias de red.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que los mensajes llegan al puerto compartido.
- La telemetría visible en Plaspy incluye posiciones GNSS y parámetros del vehículo derivados del BUS OBD cuando el vehículo expone esos PIDs.
- Tras la configuración y una conexión exitosa, el dispositivo aparecerá y reportará eventos y ubicación en Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Xirgo para su unidad XT24, como comandos SMS o el software de configuración del proveedor.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como objetivo del servidor GPRS/packet.
3. Configure el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Elija el transporte UDP o TCP si el equipo requiere selección de transporte.
5. Configure el APN del operador y cualquier nombre de usuario o contraseña de APN requeridos por su SIM.
6. Aplique o guarde la configuración y reinicie o corte la alimentación del equipo si se requiere.
7. Valide que el dispositivo reporte en Plaspy y aparezca en la plataforma con ubicación y telemetría.

Si su herramienta de instalador o firmware requiere otros pasos, siga las instrucciones del proveedor además de los pasos anteriores.

## Comandos de configuración de ejemplo

El XT24 puede configurarse enviando comandos SMS al dispositivo. Los siguientes comandos SMS públicos se proporcionan en la guía de configuración del equipo y deben enviarse en el orden mostrado cuando utilice la configuración por SMS.

1. Establecer el APN del operador
- Envíe este SMS para establecer el APN y los marcadores opcionales de usuario y contraseña:
```
+XT:1002,[apnu],[apnp],[apn]
```
Explicación:
- [apn] es la cadena APN proporcionada por su operador móvil.
- [apnu] es el nombre de usuario del APN si es requerido, o deje el marcador vacío si no se usa.
- [apnp] es la contraseña del APN si es requerida, o deje el marcador vacío si no se usa.

2. Establecer el servidor GPRS apuntando a Plaspy
- Envíe este SMS para apuntar el rastreador a Plaspy en el puerto compartido. El orden importa para la configuración de servidor y puerto:
```
+XT:1001,8888,54.85.159.138,4,0,0
```
Explicación:
- Esto establece la IP del servidor en 54.85.159.138 y el puerto en 8888. El transporte y otras banderas siguen el orden de parámetros del proveedor. Alternativamente puede apuntar a d.plaspy.com si el equipo acepta dominio.

Notas:
- Estos comandos SMS son ejemplos públicos de configuración proporcionados en la documentación del equipo. Si su variante acepta nombres de dominio, use d.plaspy.com en lugar de la IP según corresponda.
- Si utiliza una herramienta de configuración del proveedor en lugar de SMS, aplique los mismos valores para dominio o IP del servidor y puerto 8888 y seleccione UDP o TCP según sea necesario.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis exacta del SMS o el orden de los parámetros. Verifique siempre el formato de comandos con su CTN o la guía de aprovisionamiento de Xirgo.
- Algunas versiones de firmware del XT24 aceptan un nombre de dominio como d.plaspy.com, mientras que otras pueden requerir una IP de servidor directa. Use el método que soporte su unidad.
- Elija entre TCP y UDP según la confiabilidad de la red y sus necesidades de instalación; Plaspy soporta ambos transportes y detectará el protocolo automáticamente.
- La configuración vía SMS es una opción pública documentada para el XT24 y resulta útil cuando se necesita configuración fuera de banda durante el despliegue.
- Mantenga a la mano el IMEI del dispositivo para confirmar la identidad del equipo y verificar el reporte en Plaspy tras la configuración.

## Por qué usar Plaspy con esta configuración

Usar el XT24 con Plaspy permite a los operadores de flotas combinar una instalación OBD compacta y plug-and-play con visibilidad centralizada y recolección de telemetría. Apuntar el XT24 a Plaspy posibilita que las posiciones GNSS y los datos del bus del vehículo fluyan hacia la plataforma para seguimiento en tiempo real, historial de rutas, alertas e informes de flota sin variaciones de puerto por dispositivo.

Learn more about Plaspy and how it supports connected vehicle workflows at https://www.plaspy.com. For device specific commands, firmware behavior, and the most current setup details please verify information with the manufacturer at https://xirgo.com/ as vendor documentation and firmware changes can alter configuration methods over time.
