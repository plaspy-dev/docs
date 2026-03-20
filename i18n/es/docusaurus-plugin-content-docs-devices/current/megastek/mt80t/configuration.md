---
slug: /megastek/mt80t/configuration
id: mt80t-configuration
sidebar_label: Configuration
title: Megastek - MT80T Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Megastek MT80T para Plaspy usando comandos SMS públicos y ajustes de servidor compartidos para reporte GPRS
keywords:
  - Configuración Megastek MT80T
  - Configuración MT80T
  - Configuración rastreador GPS Megastek
  - Configuración MT80T Plaspy
  - Configuración servidor rastreador GPS
  - Comandos SMS MT80T
  - Configuración APN MT80T
  - Integración rastreador Plaspy
  - Configuración rastreador médico
  - Configuración rastreador personal
---

# Megastek - Configuración del MT80T

Esta página documenta el contexto público de configuración para usar el Megastek MT80T con la plataforma Plaspy. Se enfoca en los ajustes prácticos del servidor y en los comandos de configuración por SMS que se usan habitualmente para apuntar los dispositivos MT80T a Plaspy para reporte GPRS y visibilidad en la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. La configuración exacta en el dispositivo puede variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con el manual oficial del dispositivo y las instrucciones del vendedor.

## Resumen de configuración

Este proceso prepara el MT80T para que informe ubicación y telemetría a Plaspy configurando el identificador del dispositivo, el APN, el intervalo de reporte y el endpoint del servidor GPRS. El objetivo es asegurar que el rastreador pueda establecer un enlace de datos con Plaspy y aparecer en la plataforma para monitoreo en tiempo real y alertas de eventos.

- Configure el identificador del dispositivo para que Plaspy pueda asociarlo a una cuenta o registro.
- Ingrese los ajustes APN del operador para que el rastreador use datos móviles en los reportes GPRS.
- Establezca el intervalo de actualización del dispositivo para controlar la frecuencia de envíos a Plaspy.
- Configure la dirección del servidor GPRS a d.plaspy.com o la IP de Plaspy para que la telemetría se entregue al servicio.
- Habilite el modo de datos GPRS para que el rastreador envíe posición y eventos por la red celular.
- Verifique que el dispositivo aparezca en Plaspy y que la detección de protocolo procese correctamente los mensajes entrantes.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte admite UDP o TCP en el puerto 8888 según la capacidad del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador para aceptar múltiples formatos en el mismo puerto

## Requisitos previos habituales

- Un dispositivo MT80T cargado y con acceso al IMEI o identificador del dispositivo para la configuración.
- Una tarjeta SIM activa provisionada para datos y capaz de enviar y recibir SMS si se usa configuración vía SMS.
- Conocimiento del APN del operador y del usuario y contraseña APN si el operador los requiere.
- Acceso a la lista de comandos SMS oficiales del fabricante o a la utilidad de configuración para el MT80T.
- La contraseña por defecto usada en los ejemplos SMS es 000000 a menos que el proveedor haya indicado otra diferente.
- Una cuenta de prueba o entorno de staging en Plaspy para validar el dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El MT80T envía su posición GNSS y la telemetría de eventos a Plaspy reportando al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo esté configurado para apuntar a Plaspy, la plataforma recibe los mensajes e interpreta automáticamente el protocolo del rastreador.

- El rastreador se configura para reportar a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la opción del dispositivo y los requisitos de red.
- Plaspy detecta automáticamente el protocolo del rastreador de modo que los mensajes del MT80T se analizan sin necesidad de un puerto específico por dispositivo.
- Los datos enviados al endpoint de Plaspy son visibles en la plataforma para monitoreo en tiempo real y alertas.
- Tras la conexión exitosa, el dispositivo reportará posiciones periódicas y actualizaciones de eventos según el intervalo configurado.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Megastek para el MT80T, por ejemplo el conjunto de comandos SMS del proveedor o la herramienta de configuración del fabricante.  
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en los ajustes del servidor del dispositivo.  
3. Establezca el puerto del servidor en 8888 que Plaspy utiliza para todos los dispositivos compatibles.  
4. Elija UDP o TCP si el MT80T requiere seleccionar un protocolo de transporte.  
5. Aplique o guarde la configuración en el dispositivo y habilite GPRS o el modo de reporte de datos.  
6. Reinicie el dispositivo si las instrucciones del fabricante requieren un reinicio para que los ajustes surtan efecto.  
7. Valide que el rastreador reporte a Plaspy comprobando la conectividad y la presencia del dispositivo en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El MT80T puede configurarse enviando comandos SMS al número del dispositivo. Los ejemplos a continuación se toman del conjunto de comandos públicos del dispositivo y muestran la secuencia usada comúnmente para preparar el rastreador para los reportes a Plaspy. Los comandos de ejemplo usan la contraseña por defecto 000000. Reemplace los marcadores y partes del IMEI según corresponda.

- Nota sobre el IMEI en el comando de ID del dispositivo
  - El comando de ID del dispositivo incluye el IMEI del rastreador. El ejemplo publicado usa los últimos 15 dígitos del IMEI. Reemplace las X abajo por los dígitos reales del IMEI.

1) Establecer el ID del dispositivo (reemplazar XXXXXXXXXXXXXXX por los últimos 15 dígitos del IMEI)
```text
M000000,22,XXXXXXXXXXXXXXX
```

2) Configurar el APN del operador. Reemplace {{apn}}, {{apnu}} y {{apnp}} con el APN de su operador, el usuario APN y la contraseña APN según sea necesario. Los campos de usuario y contraseña pueden omitirse si el operador no los requiere.
```text
M000000,23,{{apn}}{{,{{apnu}},{{apnp}}}}
```

3) Fijar el intervalo de actualización a 60 segundos
```text
M000000,25,60
```

4) Establecer el servidor GPRS a Plaspy. Este ejemplo sigue el orden de parámetros público mostrado en la documentación del proveedor. Confirme el orden de los parámetros en el manual del dispositivo si tiene dudas.
```text
M000000,24,56 54.85.159.138,8888
```

5) Habilitar el modo GPRS
```text
M000000,21,2
```

- Notas sobre los marcadores
  - {{apn}} es la cadena APN del operador móvil.  
  - {{apnu}} y {{apnp}} son campos opcionales de usuario y contraseña APN si su operador los requiere.  
  - Mantenga la contraseña por defecto 000000 en los comandos a menos que su dispositivo esté configurado con una contraseña diferente.

## Notas de configuración

- La configuración vía SMS está soportada por el conjunto público de comandos del MT80T, pero la sintaxis exacta y el orden de parámetros pueden variar según la versión de firmware. Confirme con el manual del dispositivo.
- Algunos comandos incluyen índices o campos de bandera antes de la dirección del servidor. Si el significado no está claro consulte la documentación del fabricante para evitar reconfigurar ranuras de servidor por error.
- Elija UDP o TCP según la confiabilidad de la red y el soporte del dispositivo. Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo entrante.
- Las revisiones de firmware y hardware pueden cambiar el comportamiento de los comandos o el formato de parámetros. Verifique los comandos conforme a la documentación del MT80T para su versión de firmware específica.
- Tenga a la mano las credenciales APN al configurar los ajustes GPRS y pruebe la conectividad después de aplicar la configuración.

## Por qué usar Plaspy con esta configuración

Usar el MT80T con Plaspy centraliza la ubicación y la telemetría de estado en una única plataforma de monitoreo, de modo que las organizaciones pueden rastrear dispositivos, recibir notificaciones de alarmas como SOS o eventos de caída, y revisar trayectos históricos. La detección automática de protocolos de Plaspy y el puerto compartido simplifican la incorporación de dispositivos, ya que muchos modelos pueden dirigirse al mismo endpoint de Plaspy.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo, notas de firmware y detalles de configuración consulte los recursos oficiales del fabricante en https://www.megastek.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
