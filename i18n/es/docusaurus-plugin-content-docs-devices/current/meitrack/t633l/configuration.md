---
slug: /meitrack/t633l/configuration
id: t633l-configuration
sidebar_label: Configuration
title: Meitrack - T633L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Meitrack T633L con Plaspy usando la configuración compartida del servidor Plaspy
keywords:
  - configuración Meitrack T633L
  - instalación Meitrack T633L
  - configuración servidor T633L
  - configuración T633L Plaspy
  - configuración rastreador GPS Meitrack
  - configuración rastreador vehicular Plaspy
  - rastreador de flotas T633L
  - configuración SMS T633L
  - configuración APN T633L
  - configuración rastreador Plaspy
---

# Meitrack - Configuración del T633L

Esta página documenta el contexto público de configuración para usar el Meitrack T633L con Plaspy. Se centra en los ajustes de servidor compartidos de Plaspy y en los pasos prácticos que puede seguir para configurar el equipo de modo que reporte a Plaspy para seguimiento en tiempo real, telemetría de flotas y registro de eventos. Use esta guía junto con la documentación del fabricante y las herramientas del proveedor para procedimientos específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos y un único puerto para todos los dispositivos compatibles, y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo a continuación reflejan la secuencia pública de configuración por SMS proporcionada para el T633L e incluyen marcadores de posición que debe reemplazar con los datos de APN de su operador.

## Resumen de configuración

Este proceso prepara el T633L para comunicarse de forma confiable con Plaspy, apuntando el equipo al servidor de Plaspy y ajustando los intervalos y eventos para uso en flotas. El objetivo es habilitar un flujo de datos estable y seguro desde el rastreador hacia Plaspy para que los vehículos y la telemetría aparezcan en la plataforma con el menor retraso posible.

- Configure el equipo para que informe al endpoint y puerto del servidor de Plaspy, de modo que las actualizaciones de posición lleguen a la plataforma.
- Proporcione el APN celular correcto y, si procede, las credenciales APN para que la conexión GPRS funcione.
- Ajuste los intervalos de reporte y las banderas de eventos para que Plaspy reciba la cadencia de telemetría deseada.
- Valide la conectividad y la visibilidad en Plaspy tras aplicar la configuración.
- Opcionalmente, restaure los valores de fábrica antes de preparar un equipo para un nuevo despliegue.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto 8888 para la comunicación con el servidor

## Requisitos habituales antes de la configuración

- Una unidad T633L con alimentación y accesible, instalada o conectada para su configuración.
- Una tarjeta SIM celular activa y provisionada para datos, capaz de alcanzar los ajustes APN del operador.
- Conocer el APN del operador y cualquier nombre de usuario y contraseña APN que requiera su SIM.
- Acceso al método oficial de configuración del fabricante, como comandos SMS o utilidades del proveedor.
- La contraseña por defecto del dispositivo, si se requiere para comandos, es 0000 según los ejemplos públicos.
- Una forma de confirmar que el dispositivo informa en Plaspy después de la configuración, por ejemplo una cuenta en Plaspy o asistencia del soporte.

## Cómo se conecta este rastreador a Plaspy

El T633L se configura para enviar posiciones y telemetría al endpoint y puerto compartidos del servidor de Plaspy, de modo que Plaspy ingiera los datos de posición y eventos para mapeo, alertas y análisis. La detección automática de protocolo de Plaspy elimina la necesidad de seleccionar un protocolo específico en la plataforma cuando el dispositivo se conecta.

- El rastreador apunta a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- El dispositivo utiliza el APN del operador y datos GPRS para establecer la conexión con Plaspy.
- Los reportes y eventos se envían por UDP o TCP según la selección del dispositivo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes para su visualización.
- Una vez conectado, la ubicación, la telemetría del bus CAN y los eventos de sensores configurados son visibles en Plaspy para monitoreo e informes.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el T633L, como comandos SMS o la utilidad de configuración del proveedor.
2. Ingrese la dirección del servidor de Plaspy, ya sea como el dominio d.plaspy.com o como la IP 54.85.159.138, según la herramienta del dispositivo que esté usando.
3. Establezca el puerto en 8888, que Plaspy utiliza para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte para la comunicación con el servidor.
5. Ingrese el APN del operador y, si corresponde, el nombre de usuario y la contraseña APN en los ajustes del dispositivo cuando se requiera una configuración GPRS.
6. Aplique o guarde la configuración y reinicie el equipo si el rastreador necesita un reinicio para activar los ajustes.
7. Valide que el dispositivo informe a Plaspy confirmando que la unidad aparece y transmite datos en su cuenta de Plaspy o mediante diagnósticos de la plataforma.

## Comandos de configuración de ejemplo

La configuración pública del T633L puede realizarse mediante comandos SMS. La secuencia de ejemplo usa la contraseña por defecto del dispositivo 0000. Reemplace los marcadores y valores con el APN de su operador y las credenciales necesarias.

- Reinicio de fábrica opcional o restauración a valores predeterminados (usar sólo si es necesario antes del aprovisionamiento):

```text
0000,F11
```

- Configure el servidor GPRS a Plaspy usando la IP del servidor Plaspy y el puerto. Reemplace [apn] por el APN de su operador. Opcionalmente incluya nombre de usuario [apnu] y contraseña [apnp] si su SIM los requiere.

```text
0000,A21,2,54.85.159.138,8888,[apn]
```

- Si su configuración requiere nombre de usuario y contraseña APN, inclúyalos de la siguiente forma

```text
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```

- Establezca la zona horaria del dispositivo a UTC 0

```text
0000,B36,0
```

- Configure el intervalo de subida del GPS para una vez cada 1 minuto

```text
0000,A12,6,0
```

- Configure las banderas de reporte de eventos como se muestra en el ejemplo público

```text
0000,C03,0
```

Notas sobre los marcadores
- [apn] es el nombre del Punto de Acceso (Access Point Name) del operador necesario para datos GPRS.
- [apnu] es el nombre de usuario APN cuando el operador lo solicita.
- [apnp] es la contraseña APN cuando el operador lo solicita.
- El comando de reinicio inicial 0000,F11 es opcional y sólo debe emplearse al preparar un dispositivo para un nuevo despliegue o cuando lo indique su instalador.

## Notas de configuración

- Las variantes de firmware y región pueden cambiar los comandos disponibles o el orden de los parámetros; verifique siempre la sintaxis de comandos para el firmware de su dispositivo.
- El T633L soporta configuración por SMS como se muestra, pero muchos proveedores también ofrecen herramientas de configuración o gestión OTA; elija el método adecuado para su despliegue.
- Seleccione UDP o TCP según su entorno de red y las consideraciones de estabilidad; Plaspy acepta ambos y detectará el protocolo automáticamente.
- El servidor de Plaspy puede ser referenciado por el dominio d.plaspy.com o directamente por la IP 54.85.159.138 en el puerto 8888; usar la IP puede ayudar a evitar problemas de DNS en algunas redes de operadores.
- Mantenga un registro de la contraseña del dispositivo y de los métodos de configuración autorizados para evitar bloquear el equipo tras realizar cambios.

## Por qué usar Plaspy con esta configuración

Integrar el Meitrack T633L con Plaspy ofrece una vía práctica para el seguimiento de vehículos en tiempo real, reportes de ubicación de alta precisión y telemetría enriquecida desde el bus CAN y sensores periféricos. Usar los ajustes de servidor compartidos de Plaspy simplifica despliegues masivos, ya que todos los dispositivos apuntan al mismo endpoint y puerto, y la plataforma detecta automáticamente el protocolo del dispositivo cuando este se conecta.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para los comandos de configuración específicos más recientes, el comportamiento del firmware y las referencias técnicas oficiales, verifique la información en el sitio de Meitrack https://www.meitrack.com/ ya que los procedimientos del fabricante y los detalles de firmware pueden cambiar con el tiempo.
