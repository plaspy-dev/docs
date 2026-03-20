---
slug: /noran/nr108/configuration
id: nr108-configuration
sidebar_label: Configuration
title: Noran - NR108 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar NR108 y conectar rastreadores Noran a Plaspy por servidor compartido, SMS o GPRS
keywords:
  - Configuración Noran NR108
  - Configuración NR108 Plaspy
  - Configuración rastreador Noran GPS
  - Configuración servidor NR108
  - Comandos SMS Noran NR108
  - Configuración APN NR108
  - Configuración GPRS NR108
  - Integración Noran NR108
  - Compatibilidad NR108 Plaspy
  - Configuración plataforma GPS Noran
---

# Noran - Configuración NR108

Esta página documenta el contexto público de configuración para usar el rastreador Noran NR108 con Plaspy. Consolida los pasos de configuración y los parámetros de servidor conocidos y disponibles públicamente que permiten al NR108 reportar ubicación y telemetría a Plaspy. Cuando los comandos del fabricante son de dominio público, se incluyen a modo de ejemplo para configuración vía SMS o mediante la herramienta de configuración del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El NR108 soporta reportes por GPRS (Internet) y SMS con LBS como respaldo; los ejemplos a continuación muestran cómo apuntar el equipo al servidor compartido de Plaspy y cómo verificar la conectividad básica.

## Resumen de la configuración

El proceso de configuración prepara el NR108 para enviar datos de posición y eventos a Plaspy y quedar visible en la plataforma. Para unidades NR108, la configuración común utiliza la interfaz de comandos por SMS del dispositivo para establecer el APN, el servidor y el modo GPRS, de modo que el rastreador pueda subir datos por la red móvil.

- Configure el APN del operador para que el NR108 pueda establecer conectividad GPRS con Plaspy.
- Ajuste el dispositivo para que reporte al endpoint compartido y al puerto de Plaspy.
- Seleccione la opción de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Cambie el rastreador al modo de reporte por GPRS/Internet y verifique el estado de la conexión.
- Use el comando de consulta incluido para confirmar el ID del dispositivo, APN, servidor, puerto y estado GPRS para que la unidad sea visible en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport support: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Requisitos típicos antes de la configuración

- Una unidad NR108 alimentada con acceso a su interfaz SMS o de configuración y al manual de instalación.  
- Una tarjeta SIM activa con voz/SMS y datos móviles (GPRS) habilitados y conociendo el APN del operador.  
- Un teléfono capaz de enviar los comandos SMS de configuración al equipo, o acceso a la herramienta oficial de Noran cuando esté disponible.  
- Conocimiento de la contraseña del dispositivo; muchos ejemplos públicos del NR108 usan la contraseña por defecto 000000 para la configuración inicial.  
- Visibilidad básica del equipo (instalado o en banco) para poder confirmar las respuestas a las consultas SMS y observar indicadores LED o de estado si están presentes.  
- Acceso a Plaspy para validar que el dispositivo aparece y reporta después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El NR108 se configura para reportar posición y alarmas al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda procesar, mostrar y alertar sobre la telemetría. El reporte puede realizarse por GPRS (Internet) cuando el APN y el servidor están configurados, o por SMS para reportes limitados y como respaldo.

- El rastreador se apunta al servidor de Plaspy (d.plaspy.com o 54.85.159.138) y al puerto 8888 para la subida de datos.  
- El dispositivo envía paquetes de telemetría y posición por GPRS cuando la conexión de datos está disponible.  
- Alarmas como exceso de velocidad, geocerca, SOS, corte de energía y telemetría de combustible pueden reportarse a Plaspy y emplearse para disparar alertas.  
- LBS como respaldo y SMS pueden proporcionar reportes limitados cuando la cobertura GPS o GPRS es deficiente.  
- Plaspy recibe los datos en el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del equipo para su correcto parseo.

## Flujo habitual de configuración

1. Acceda al método de configuración oficial del fabricante o a la interfaz de comandos SMS descrita en la documentación de Noran.  
2. Configure el APN del operador usando el comando SMS del dispositivo o la herramienta de configuración y confirme que se guardó correctamente.  
3. Ingrese el dominio o la IP del servidor de Plaspy (d.plaspy.com o 54.85.159.138) en el dispositivo y establezca el puerto 8888.  
4. Seleccione el transporte UDP o TCP si el NR108 requiere una selección explícita.  
5. Cambie el dispositivo al modo de reporte GPRS/Internet y guarde o aplique la configuración.  
6. Reinicie o haga un ciclo de energía del NR108 si el fabricante lo recomienda para aplicar los cambios de red.  
7. Valide que el dispositivo reporta a Plaspy consultando al rastreador y verificando la plataforma Plaspy para mensajes entrantes.

## Comandos de configuración de ejemplo

El NR108 admite configuración vía SMS. Los comandos de ejemplo públicos que se muestran abajo usan el marcador de contraseña del dispositivo y deben enviarse como mensajes SMS al rastreador desde un número autorizado. Los comandos de ejemplo asumen que la contraseña del dispositivo es 000000 por defecto. Preserve los marcadores {{apn}}, {{apnu}} y {{apnp}} y reemplácelos con los valores de su operador cuando envíe el SMS.

- Establecer APN del operador (reemplace {{apn}} y opcionalmente usuario y contraseña):
```
A000000,012,{{apn}}
```
Opcional con usuario y contraseña de APN:
```
A000000,012,{{apn}},{{apnu}},{{apnp}}
```

- Establecer el servidor GPRS a Plaspy usando la IP y el puerto (ejemplo público):
```
A000000,010,54.85.159.138,8888
```
(También puede configurar el servidor por nombre de dominio si su herramienta de configuración lo permite usando d.plaspy.com en lugar de la IP.)

- Cambiar el dispositivo a modo GPRS:
```
A000000,011,1
```

- Consultar ajustes y estado del dispositivo (devuelve Id del equipo, APN, servidor, puerto, estado GPRS, estado de conexión, señal):
```
A000000,004
```

Notas sobre marcadores y valores por defecto:
- {{apn}} representa el valor del APN de su operador móvil.  
- {{apnu}} y {{apnp}} son campos opcionales de nombre de usuario y contraseña de APN requeridos por algunos operadores.  
- Los comandos de ejemplo usan la IP pública del servidor Plaspy y el puerto mostrados arriba; puede sustituir por d.plaspy.com si su dispositivo acepta nombres de dominio.  
- La contraseña por defecto en ejemplos públicos suele ser 000000; si la contraseña se ha cambiado en su unidad, utilice la contraseña actual al enviar los comandos.

## Notas de configuración

- La contraseña por defecto 000000 aparece frecuentemente en ejemplos públicos; confirme la contraseña correcta de su equipo antes de enviar comandos.  
- Algunas versiones de firmware o revisiones de hardware del NR108 aceptan nombres de dominio (d.plaspy.com) mientras que otras requieren la IP numérica; utilice el método que soporte su firmware.  
- Elija UDP o TCP según lo solicite el equipo cuando sea necesario; Plaspy soporta ambos transportes en el puerto compartido y detecta el protocolo automáticamente.  
- La configuración vía SMS es muy usada para la puesta en marcha inicial del NR108; mantenga un número autorizado y la capacidad de enviar SMS durante la instalación.  
- Consulte siempre la documentación del fabricante para comandos específicos de firmware y diferencias de comportamiento antes de aplicar cambios.

## Por qué usar Plaspy con esta configuración

Configurar el NR108 para reportar a Plaspy proporciona visibilidad centralizada de ubicación, alarmas y telemetría de combustible, de modo que los operadores de flotas y los equipos de servicio puedan monitorear activos, responder a incidentes y analizar el uso. El tamaño compacto del NR108 y su reporte de bajo consumo de datos lo hacen adecuado para vehículos donde la instalación discreta y la reducción de costos de conectividad son importantes.

Para obtener más información sobre Plaspy y cómo la plataforma recopila y muestra los datos del dispositivo, visite https://www.plaspy.com. Para los comandos de configuración más recientes, comportamiento de firmware y documentación detallada del NR108, verifique los pasos de configuración en el sitio del fabricante http://www.norantracker.com/ ya que las especificaciones y formatos de comandos pueden cambiar con el tiempo.
