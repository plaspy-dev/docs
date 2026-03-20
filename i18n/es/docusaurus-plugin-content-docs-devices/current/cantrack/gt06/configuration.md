---
slug: /cantrack/gt06/configuration
id: gt06-configuration
sidebar_label: Configuration
title: CanTrack - GT06 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el CanTrack GT06 con Plaspy usando ajustes de servidor compartido y comandos SMS de ejemplo
keywords:
  - Configuración CanTrack GT06
  - Configuración GT06 Plaspy
  - Configuración GPS CanTrack
  - Configuración servidor GT06
  - Comandos SMS GT06
  - Configuración GPRS rastreador GPS
  - Configuración rastreador vehicular
  - Configuración seguimiento de flotas
  - Configuración dispositivo Plaspy
  - Configuración plataforma GT06
---

# CanTrack - GT06 Configuración

Esta página describe el contexto público de configuración para usar el rastreador CanTrack GT06 con Plaspy. Reúne ejemplos prácticos de comandos SMS publicados por el fabricante y los ajustes de servidor de Plaspy que debe usar para apuntar el dispositivo a nuestra plataforma. El GT06 (también conocido como TK100) admite el envío de datos de posición por SMS y a través de GPRS hacia un servidor de Internet, lo que lo hace apropiado para el seguimiento de vehículos y la gestión de flotas con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos de configuración en el dispositivo pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. Los comandos SMS de ejemplo que se muestran a continuación reflejan patrones públicos de configuración del GT06; confirme cualquier diferencia específica del equipo con la documentación del fabricante cuando sea necesario.

## Resumen de la configuración

Configurar el GT06 para Plaspy prepara el rastreador para enviar datos de ubicación y estado a la plataforma Plaspy y garantiza que el dispositivo sea visible y reportable en su cuenta. El proceso normalmente utiliza la interfaz de comandos SMS del equipo (o herramientas del fabricante) para establecer el APN del operador y la dirección y puerto del servidor remoto para que los paquetes GPRS lleguen correctamente a Plaspy.

- Apuntar el equipo al endpoint del servidor Plaspy para enrutar correctamente los datos GPRS.  
- Configurar el APN del operador y, si corresponde, el usuario y la contraseña del APN para la conectividad GPRS.  
- Verificar los ajustes de transporte (UDP o TCP) y establecer el puerto 8888 que utiliza Plaspy.  
- Confirmar que el dispositivo acepta los comandos de configuración por SMS y que la contraseña del equipo es la correcta.  
- Probar la conectividad para que el dispositivo aparezca y reporte en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com  
- IP del servidor: 54.85.159.138  
- Puerto: 8888 (este puerto se usa en todos los dispositivos de Plaspy)  
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta muchos protocolos sin cambios de puerto por dispositivo

## Requisitos típicos antes de comenzar

- Un GT06 alimentado e instalado o accesible para configuración y pruebas.  
- Una tarjeta SIM GSM activa con datos y SMS habilitados y saldo suficiente para GPRS y SMS según corresponda.  
- Datos del APN del operador listos (host APN y, si aplica, usuario y contraseña del APN).  
- Acceso a la guía de comandos SMS del proveedor o a la herramienta de configuración del GT06.  
- La contraseña del dispositivo (en los ejemplos públicos la contraseña por defecto es 123456) o confirmación de cualquier contraseña que se haya cambiado.  
- Una cuenta en Plaspy y la posibilidad de ver las conexiones entrantes del dispositivo en la plataforma para validar el reporte.

## Cómo se conecta este rastreador a Plaspy

El GT06 envía datos de ubicación y telemetría por GPRS al endpoint y puerto configurados de Plaspy, de modo que Plaspy pueda mostrar la posición, el estado y los eventos. La configuración indica al GT06 que transmita su telemetría al servidor compartido de Plaspy usando el transporte seleccionado (UDP o TCP).

- El enlace ascendente GPRS del dispositivo se configura con el dominio o la IP del servidor Plaspy y el puerto 8888.  
- El rastreador usa los ajustes APN del operador para establecer la conectividad GPRS.  
- Plaspy recibe los datos entrantes y detecta automáticamente el protocolo del rastreador para su análisis.  
- Una vez que reporta, el dispositivo es visible en Plaspy para seguimiento de ubicación y monitoreo de eventos.  
- La selección de transporte (UDP o TCP) se realiza en el dispositivo; Plaspy admite ambos y mantiene el mismo puerto para todos los equipos.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del CanTrack GT06 (comandos SMS o la herramienta de configuración del fabricante).  
2. Compruebe que el dispositivo tenga una SIM operativa e ingrese los datos del APN del operador ({{apn}}, {{apnu}}, {{apnp}} si se requiere).  
3. Introduzca la información del servidor Plaspy usando d.plaspy.com o 54.85.159.138 y configure el puerto 8888.  
4. Elija UDP o TCP como transporte si el equipo requiere selección explícita.  
5. Aplique o guarde la configuración mediante el método del dispositivo (guardar por SMS, guardar en la herramienta o disparador de reinicio).  
6. Reinicie el equipo si el fabricante lo exige para aplicar los parámetros de red.  
7. Valide que el rastreador reporte a Plaspy y aparezca en su cuenta o que el dispositivo envíe los mensajes esperados al servidor.

## Comandos de configuración de ejemplo

El GT06 suele aceptar comandos SMS para configuración. Los comandos de ejemplo que aparecen a continuación son públicos. La contraseña que se usa en estos ejemplos es 123456 (es la contraseña por defecto que aparece en documentación pública). Conserve y reemplace los marcadores donde sea necesario.

1. Restauración inicial opcional a valores de fábrica (marque esto como opcional y úselo solo si necesita reiniciar a valores de fábrica):
```
#begin#123456#
```

2. Establecer la zona horaria (ejemplo para UTC 0):
```
#timezone#123456#W#0#00#
```

3. Configurar el APN del operador. Reemplace {{apn}} por el host APN de su operador. Incluya {{apnu}} y {{apnp}} solo si su operador exige usuario y contraseña del APN. Los marcadores de usuario y contraseña del APN son opcionales:
```
#apn#123456#{{apn}}#{{apnu}}#{{apnp}}#
```
Explicación: {{apn}} = host APN del operador, {{apnu}} = usuario APN (opcional), {{apnp}} = contraseña APN (opcional).

4. Establecer el servidor GPRS hacia Plaspy. Puede usar la IP del servidor Plaspy o el dominio (d.plaspy.com). Este ejemplo público usa la IP de Plaspy y el puerto 8888:
```
#IP#123456#54.85.159.138#8888#
```
O reemplace la IP por el dominio (si el firmware acepta dominios):
```
#IP#123456#d.plaspy.com#8888#
```

5. Verificar o consultar los ajustes (comando público de verificación; el comportamiento puede variar según el firmware):
```
TCP
```
Nota: El comando exacto de verificación y el formato de respuesta dependen del firmware del GT06. Use estos comandos como ejemplos públicos y confirme el comportamiento en su dispositivo específico.

## Notas de configuración

- El GT06 admite la configuración por SMS como se muestra en los ejemplos; algunos instaladores prefieren el software del fabricante o herramientas de configuración según el firmware.  
- La contraseña por defecto en ejemplos públicos es 123456; si la contraseña fue cambiada, utilice la contraseña correcta en los comandos.  
- Algunas versiones de firmware del GT06 aceptan nombres de dominio para el servidor y otras requieren una dirección IP; pruebe d.plaspy.com o 54.85.159.138 según lo que admita su dispositivo.  
- Elija UDP o TCP según las opciones del equipo y pruebe ambas si es necesario; Plaspy soporta ambos transportes y usa el mismo puerto para todos los dispositivos.  
- Las variantes de firmware y regionales pueden cambiar la sintaxis de los comandos o las opciones disponibles; siempre verifique la documentación más reciente de CanTrack para su revisión de hardware.

## Por qué usar Plaspy con esta configuración

Configurar el CanTrack GT06 para reportar a Plaspy ofrece a gestores de flotas y operadores una forma sencilla de centralizar los datos de ubicación y eventos de los vehículos en una sola plataforma. Al dirigir los reportes GPRS al endpoint y puerto compartidos de Plaspy, habilita visibilidad en tiempo real, seguimiento de eventos y monitoreo centralizado sin la gestión de puertos por cada dispositivo.

Para obtener más información sobre Plaspy y cómo maneja las conexiones de dispositivos, visite https://www.plaspy.com. Verifique los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de CanTrack https://www.cantrackgps.com/ ya que las especificaciones y la sintaxis de comandos pueden cambiar con el tiempo.
