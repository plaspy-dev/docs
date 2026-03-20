---
slug: /sentar/l70s/configuration
id: l70s-configuration
sidebar_label: Configuration
title: Sentar - L70S Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración Sentar L70S para compatibilidad con Plaspy con comandos SMS de ejemplo y ajustes de servidor
keywords:
  - Configuración Sentar L70S
  - Instalación Sentar L70S
  - Sentar L70S Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS Sentar
  - Configuración servidor L70S
  - Comandos SMS L70S
  - Configuración reloj GPS
  - Configuración plataforma de rastreo
  - Configuración dispositivo a servidor
---

# Sentar - Configuración L70S

Esta página explica el contexto público de configuración para utilizar el rastreador Sentar L70S con Plaspy. Reúne los valores de servidor compartidos de Plaspy que necesitará, orientación práctica aplicable al L70S y ejemplos de comandos SMS que se usan comúnmente para preparar el equipo y enviar datos a una plataforma de terceros.

Plaspy usa ajustes de servidor comunes entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando estén disponibles, aquí se incluyen los comandos SMS del L70S publicados de forma pública y se explica cómo aplicar los valores del servidor Plaspy a la configuración del dispositivo.

## Resumen de la configuración

El objetivo de configurar el L70S para Plaspy es preparar el dispositivo para enviar posición y datos de estado al servidor de Plaspy, de modo que el rastreador aparezca y se actualice de forma fiable en la plataforma. En equipos L70S esto suele implicar ajustar el APN del operador, configurar el endpoint del servidor GPRS, elegir el tipo de transporte si se requiere y verificar que las actualizaciones llegan al endpoint de Plaspy.

- Configure el APN del SIM y el servidor GPRS para que el rastreador abra una conexión de datos hacia Plaspy
- Ajuste el transporte (UDP o TCP) y el puerto común de Plaspy
- Establezca un intervalo de reporte para que el dispositivo envíe actualizaciones periódicas
- Valide la conectividad y confirme que el dispositivo es visible en la plataforma Plaspy
- Use comandos SMS o herramientas del fabricante cuando sea aplicable para automatizar la puesta a punto

## Ajustes del servidor Plaspy

Use los siguientes valores del servidor Plaspy al configurar el Sentar L70S:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo, por lo que solo debe apuntar el rastreador al endpoint de Plaspy y al puerto compartido.

## Requisitos previos habituales

- Una tarjeta SIM operativa con datos habilitados y el APN configurado para su operador
- Acceso al método de configuración del L70S proporcionado por Sentar, ya sea mediante comandos SMS o software oficial
- Alimentación básica y dispositivo con batería suficiente para que pueda registrarse en la red móvil
- Conocimiento de la contraseña por defecto del dispositivo si la configuración vía SMS requiere autenticación
- Tener a mano los valores del servidor Plaspy indicados arriba para ingresarlos en la configuración
- Un método para recibir respuestas del dispositivo, como retroalimentación por SMS o un registro en terminal para verificación

## Cómo se conecta este rastreador a Plaspy

El Sentar L70S se configura para enviar ubicación y estado del dispositivo al endpoint y puerto compartidos de Plaspy, de forma que la plataforma pueda mostrar y procesar los datos para su monitoreo. Una vez configurado, el dispositivo abre una conexión de datos GPRS hacia el servidor y envía actualizaciones según el intervalo establecido.

- El dispositivo resuelve y se conecta a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- Los datos se envían sobre el transporte elegido, UDP o TCP, según la configuración del equipo
- Plaspy detecta automáticamente el protocolo y acepta las conexiones entrantes en el puerto compartido
- El intervalo de subida periódico controla la frecuencia con la que el L70S envía posiciones a Plaspy
- La plataforma muestra la visibilidad del dispositivo, la última ubicación reportada y eventos básicos una vez establecida la comunicación

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Sentar para el L70S, por ejemplo comandos SMS o la herramienta del proveedor
2. Introduzca el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 según las opciones del dispositivo
3. Configure el puerto en 8888, que es el utilizado por todos los dispositivos en Plaspy
4. Seleccione UDP o TCP si el dispositivo le solicita elegir el transporte
5. Aplique y guarde la configuración en el dispositivo
6. Reinicie el equipo si las instrucciones del fabricante requieren un reinicio para aplicar los ajustes de red
7. Valide que el dispositivo reporta a Plaspy comprobando la visibilidad y la última actualización en la plataforma

Si utiliza configuración por SMS, realice los mismos pasos lógicos usando las cadenas o secuencias SMS que recomienda Sentar.

## Comandos de configuración de ejemplo

Los siguientes comandos de ejemplo provienen del contenido público de configuración SMS del Sentar L70S. La contraseña por defecto del dispositivo mostrada es 123456 y se usa en estos ejemplos. El restablecimiento de fábrica se muestra como opcional y utilícelo solo para una puesta a cero inicial o si es necesario.

- Comando de restablecimiento de fábrica (paso inicial opcional)
```text
pw,123456,factory#
```

- Establecer la zona horaria a UTC 0
```text
pw,123456,lz,0,0#
```

- Consultar IMSI para identificar MCC y MNC
```text
pw,123456,imsi#
```

- Establecer el APN del operador donde {{apn}} es el nombre del APN, {{apnu}} es el usuario APN, {{apnp}} es la contraseña APN y xxxyy es MCC y MNC concatenados
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```

- Configurar el servidor GPRS a la IP y puerto de Plaspy según los valores públicos
```text
pw,123456.ip,54.85.159.138,8888#
```

- Establecer intervalo de actualización a 300 segundos
```text
pw123456,upload,300#
```

- Consultar la configuración actual del rastreador para verificación
```text
pw,123456,ts#
```

Notas sobre marcadores y sintaxis
- {{apn}} es el nombre del APN de su operador móvil, {{apnu}} es el usuario APN si se requiere y {{apnp}} es la contraseña APN si aplica
- xxxyy indica el MCC numérico seguido del MNC de su operador SIM
- Los comandos de ejemplo se presentan en la misma forma pública disponible. La sintaxis o los separadores pueden cambiar según el firmware, así que verifique la respuesta del dispositivo después de enviar los comandos

## Notas de configuración

- La configuración por SMS está soportada por el conjunto de comandos públicos de Sentar mostrado aquí, aunque las herramientas del fabricante o actualizaciones de firmware pueden ofrecer interfaces alternas
- La selección de transporte entre TCP y UDP puede afectar la fiabilidad según la red y el firmware; pruebe ambos si el dispositivo soporta las dos opciones
- El servidor Plaspy puede referenciarse por dominio d.plaspy.com o por la IP 54.85.159.138 y utiliza el puerto 8888 para todos los dispositivos
- Contraseñas por defecto como 123456 se usan comúnmente en ejemplos; cambie la contraseña del dispositivo cuando sea posible por motivos de seguridad
- Diferencias de firmware o variantes regionales del producto pueden modificar la sintaxis exacta de SMS o la disponibilidad de comandos

## Por qué usar Plaspy con esta configuración

Configurar el Sentar L70S para que reporte a Plaspy ofrece a organizaciones y cuidadores visibilidad centralizada de la ubicación y el estado del dispositivo en una sola plataforma. Con el endpoint compartido de Plaspy y la detección automática de protocolo, muchos modelos de rastreadores, incluido el L70S, pueden dirigirse al mismo servidor y comenzar a reportar con ajustes de servidor consistentes.

Para obtener más información sobre Plaspy y los dispositivos compatibles visite https://www.plaspy.com. Por favor, verifique los métodos de configuración específicos del dispositivo y el comportamiento del firmware en el sitio oficial de Sentar http://www.sentarsmart.com/ antes de aplicar cambios en equipos en producción.
