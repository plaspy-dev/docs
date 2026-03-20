---
slug: /topfly/t8806/configuration
id: t8806-configuration
sidebar_label: Configuration
title: TopFly - T8806 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública y comandos SMS para preparar el TopFly T8806 y conectarlo a la plataforma Plaspy
keywords:
  - Configuración TopFly T8806
  - Configuración T8806
  - TopFly T8806 Plaspy
  - Configuración GPS T8806
  - Configuración servidor T8806
  - Configuración rastreador TopFly
  - Configuración dispositivo Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración seguimiento flota
---

# TopFly - Configuración del T8806

Esta página describe el contexto público de configuración para usar el rastreador GPS TopFly T8806 con Plaspy. Incluye los valores de servidor de Plaspy que debe aplicar en el dispositivo y muestra los comandos SMS públicos que muchas unidades T8806 aceptan para una configuración básica. Use esta guía para preparar el equipo y validar la conectividad en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe revisar la documentación oficial de TopFly y tener en cuenta diferencias de firmware al aplicar los ajustes.

## Resumen de la configuración

Esta configuración prepara el T8806 para comunicarse con Plaspy, de modo que el dispositivo aparezca y reporte correctamente en la plataforma. Los pasos prácticos normalmente incluyen establecer parámetros regionales, el APN para datos móviles y la dirección del servidor remoto y el intervalo de reporte.

- Configure la zona horaria y parámetros de tiempo para que las marcas temporales sean precisas en Plaspy
- Configure el APN del operador móvil para que el rastreador use datos GPRS para llegar al servidor de Plaspy
- Defina la dirección y el puerto del servidor GPRS para que el rastreador envíe telemetría a Plaspy en d.plaspy.com o en la IP de Plaspy
- Ajuste el intervalo de actualización de ubicación para que los reportes lleguen con la cadencia esperada
- Valide la conectividad del dispositivo y confirme que el rastreador aparece en Plaspy una vez aplicados los ajustes

## Configuración del servidor Plaspy

Use los siguientes valores públicos del servidor Plaspy al configurar el T8806:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos previos típicos

- Un rastreador T8806 alimentado e instalado con capacidad para enviar y recibir SMS o acceso a la herramienta de configuración del fabricante
- Una SIM celular activa con plan de datos y el APN correcto del operador móvil
- La contraseña por defecto del dispositivo es 0000, tal como se usa en los ejemplos SMS públicos abajo
- Acceso a la documentación del propietario o del instalador de TopFly para comandos y comportamiento específicos del modelo
- Una forma de confirmar el reporte del dispositivo en Plaspy después de la configuración, por ejemplo mediante la lista de dispositivos o la vista de telemetría en Plaspy

## Cómo se conecta este tracker a Plaspy

El T8806 envía datos de ubicación y telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma muestre posiciones en tiempo real, el historial y los eventos. Plaspy decodifica los mensajes entrantes y los asocia con su cuenta y el registro del dispositivo.

- El rastreador se configura para reportar al endpoint de Plaspy en d.plaspy.com o a la IP 54.85.159.138
- Todos los dispositivos usan el puerto 8888 al reportar a Plaspy
- Seleccione UDP o TCP en el dispositivo si es necesario; el rastreador puede configurarse con cualquiera de los dos transportes en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita especificar el tipo de protocolo dentro de la plataforma
- Después de que el rastreador reporte con éxito, Plaspy mostrará la ubicación en vivo y recibirá eventos del dispositivo para monitoreo operativo

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de TopFly para su unidad T8806, como comandos SMS o la herramienta del proveedor
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 según el modo de configuración del dispositivo
3. Establezca el puerto 8888 para la conexión al servidor
4. Elija UDP o TCP si el dispositivo requiere selección de transporte
5. Configure el APN del operador para que el dispositivo use datos móviles y alcance Plaspy
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren
7. Valide que el dispositivo reporte a Plaspy revisando el dispositivo en la plataforma y confirmando la telemetría entrante

## Ejemplos de comandos de configuración

Los ejemplos públicos de configuración del TopFly T8806 que se muestran a continuación suelen enviarse al dispositivo por SMS. Los comandos de muestra usan la contraseña por defecto 0000. Mantenga los marcadores de posición al reemplazarlos por valores reales.

- Establecer zona horaria a UTC 0
```
GMT,0000,0#
```

- Configurar el APN del operador móvil
```
APN,0000,[apn],[apnu],[apnp]#
```
Nota: [apn] es el nombre del APN, [apnu] es el usuario del APN si se requiere, y [apnp] es la contraseña del APN si se requiere. Deje los campos vacíos en blanco si su operador no exige usuario o contraseña.

- Establecer el servidor GPRS a la IP de Plaspy y puerto 8888
```
IP,0000,54.85.159.138 8888#
```
Si el dispositivo soporta un nombre de dominio para la configuración del servidor, puede reemplazar la IP por d.plaspy.com; verifique la documentación de TopFly o el comportamiento del firmware antes de cambiar a un valor de dominio.

- Establecer el intervalo de subida a 60 segundos
```
TIMER,0000,60:60:0:0#
```

Estos comandos respetan el orden importante para la configuración básica: zona horaria, APN, endpoint del servidor y temporizador de reporte. Envíe cada SMS desde el número autorizado o según las reglas de emparejamiento descritas por TopFly.

## Notas de configuración

- La configuración basada en SMS se muestra en los ejemplos públicos arriba. Algunos instaladores prefieren herramientas del proveedor o software de PC cuando están disponibles para configuraciones masivas o avanzadas.
- Las versiones de firmware y las variantes regionales de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles. Confirme siempre la sintaxis con el manual que coincide con el firmware de su dispositivo.
- Elija UDP o TCP en el dispositivo según su red y la preferencia del instalador. Plaspy aceptará cualquiera de los dos transportes en el puerto 8888 y detectará automáticamente el tipo de protocolo.
- Tenga en cuenta la contraseña por defecto del dispositivo; cámbiela cuando el dispositivo lo permita si su política de seguridad requiere una contraseña personalizada después del aprovisionamiento.
- Si su dispositivo no acepta una cadena de dominio para el servidor, use la IP de Plaspy 54.85.159.138 y el puerto 8888 como se muestra en los ejemplos SMS.

## Por qué usar Plaspy con esta configuración

Configurar el TopFly T8806 para reportar a Plaspy ofrece una forma confiable de centralizar ubicaciones de vehículos, alertas de eventos y rutas históricas en una sola plataforma de gestión de flota. El uso de los ajustes de servidor compartidos de Plaspy simplifica el aprovisionamiento de dispositivos y reduce la variabilidad por dispositivo al depender de una dirección y puerto consistentes del servidor.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el TopFly T8806 visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware e instrucciones de instalación, verifique los detalles con el fabricante en https://www.topflytech.com/ ya que el comportamiento y los métodos de configuración del dispositivo pueden cambiar con el tiempo.
