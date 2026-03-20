---
slug: /minifinder/zepto/configuration
id: zepto-configuration
sidebar_label: Configuration
title: MiniFinder - Zepto Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar MiniFinder Zepto y conectarlo a Plaspy con ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - Configuración MiniFinder Zepto
  - Instalación MiniFinder Zepto
  - Configuración servidor Zepto
  - Configuración Zepto Plaspy
  - Configuración rastreador Plaspy
  - Configuración GPS Zepto
  - Configuración rastreador OBD2
  - Integración seguimiento vehicular Plaspy
  - Configuración SMS Zepto
  - Ajustes APN Zepto
---

# MiniFinder - Configuración de Zepto

Esta página explica el contexto público de configuración para usar el MiniFinder Zepto con Plaspy. Describe los valores de servidor compartidos que Plaspy requiere, muestra los comandos SMS públicos más comunes para Zepto y detalla los pasos prácticos que puede seguir para preparar el dispositivo y lograr el rastreo en tiempo real en Plaspy.

Plaspy usa un único endpoint y puerto compartidos para todos los rastreadores soportados y detecta automáticamente el protocolo del dispositivo cuando recibe una conexión. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere los comandos y el flujo de trabajo aquí como guía pública práctica y confirme detalles específicos del dispositivo con MiniFinder cuando sea necesario.

## Resumen de configuración

El objetivo de la configuración es lograr que el Zepto informe ubicación y telemetría de forma fiable a la plataforma Plaspy, de modo que los dispositivos aparezcan en su panel Plaspy y envíen eventos e historial de viajes como se espera. Para Zepto esto se puede realizar mediante los métodos publicados por el fabricante, incluidos comandos por SMS cuando estén disponibles, o mediante las herramientas oficiales de configuración de MiniFinder.

- Prepare el Zepto para que apunte al endpoint de servidor de Plaspy para el reporte en vivo.
- Configure los ajustes de datos móviles como el APN para que el rastreador use GPRS/LTE y alcance a Plaspy.
- Envíe o aplique la configuración de servidor y puerto para que el dispositivo reporte a d.plaspy.com o a la IP del servidor de Plaspy.
- Valide la conectividad y asegúrese de que el dispositivo sea visible en Plaspy y esté enviando actualizaciones de ubicación.
- Use los comandos SMS que se muestran más abajo como ejemplo público para ajustar la zona horaria, el APN y el servidor GPRS cuando el dispositivo admita configuración por SMS.

## Resumen de configuración

(Este encabezado aparece una sola vez arriba según se requiere)

## Valores de servidor de Plaspy

Use estos valores públicos de servidor de Plaspy al configurar el Zepto para su uso con Plaspy:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Vehículo encendido o con conexión al puerto OBD para que el Zepto tenga su alimentación normal.
- Una SIM celular activa con datos habilitados y el APN correcto para su operador móvil.
- Acceso al dispositivo para configurarlo, ya sea mediante el envío de SMS al equipo o usando la herramienta oficial de MiniFinder.
- Conocimiento del APN del operador y cualquier nombre de usuario o contraseña de APN que su proveedor de SIM requiera.
- Confirmación de la versión de firmware o revisión de hardware del Zepto por parte del instalador o proveedor cuando sea posible.
- Una cuenta Plaspy en la que pueda verificar que el dispositivo aparece una vez aplicada la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el Zepto envía datos de ubicación y del dispositivo a través de la conexión celular al endpoint y puerto compartidos de Plaspy. Plaspy recibe la conexión en el puerto 8888 y utiliza detección automática de protocolo para interpretar los mensajes del rastreador y que los dispositivos sean visibles en la plataforma.

- El rastreador se dirige a reportar a d.plaspy.com o a la IP del servidor de Plaspy 54.85.159.138 en el puerto 8888.
- El transporte de datos puede usar UDP o TCP según el firmware del dispositivo y la opción de transporte seleccionada.
- Las actualizaciones de ubicación, los informes de eventos y la telemetría básica se reenvían a Plaspy para su visualización en el mapa en tiempo real y análisis.
- La detección automática de protocolo de Plaspy identifica el protocolo Zepto una vez que el dispositivo se conecta al endpoint del servidor.
- Después de la configuración, valide que las actualizaciones periódicas de ubicación y los eventos esperados aparezcan en su cuenta Plaspy.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de MiniFinder recomendado por el proveedor (comandos SMS, app móvil o herramientas web de MiniFinder).
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 cuando el dispositivo solicite un host de servidor.
3. Configure el puerto del servidor en 8888, tenga en cuenta que Plaspy usa este mismo puerto para todos los rastreadores soportados.
4. Elija UDP o TCP si el Zepto solicita selección de transporte durante la configuración.
5. Configure los ajustes de APN del dispositivo para que el rastreador pueda conectarse a través de la red móvil.
6. Aplique o guarde la configuración en el dispositivo y reinícielo si el fabricante recomienda un reinicio.
7. Valide que el dispositivo informe correctamente a Plaspy comprobando las actualizaciones de ubicación entrantes y el estado de conexión.

## Comandos de configuración de ejemplo

El Zepto soporta configuración por SMS. Los comandos públicos publicados para una configuración básica se muestran aquí en orden. Envíelos como mensajes SMS al dispositivo cuando la configuración por SMS esté soportada por su equipo y SIM.

- Ajustar la zona horaria a UTC 0
```
tz+00
```

- Establecer el APN del operador
```
S1,{{apn}}
```
o, si su APN requiere usuario y contraseña
```
S1,{{apn}},{{apnu}},{{apnp}}
```
Explicación: {{apn}} es el nombre del punto de acceso de la red para su SIM. {{apnu}} y {{apnp}} son marcadores opcionales para el usuario y la contraseña del APN cuando el operador los exige.

- Establecer el servidor GPRS/Plaspy a la IP pública y puerto de Plaspy
```
IP1,54.85.159.138,8888
```

Notas sobre los comandos:
- Estos comandos son ejemplos públicos por SMS suministrados para Zepto. Mantenga el orden cuando use SMS: zona horaria, APN y luego servidor.
- Después de enviar los comandos de servidor y APN, el fabricante o el firmware puede requerir un reinicio del dispositivo para establecer la conexión.

## Notas de configuración

- Las variantes de firmware y regionales pueden cambiar la sintaxis de los comandos o las funciones disponibles; confirme los comandos con la documentación de MiniFinder para la revisión exacta de su dispositivo.
- Elija UDP o TCP según el firmware del dispositivo y las condiciones de la red; ambos transportes son aceptados por Plaspy en el puerto 8888 y Plaspy detecta automáticamente el protocolo.
- La configuración por SMS es un método común del fabricante para Zepto, pero puede complementarse o reemplazarse por las herramientas de escritorio o móvil de MiniFinder según el firmware.
- Si su operador de SIM requiere autenticación, incluya {{apnu}} y {{apnp}} en el comando S1 exactamente como lo especifica su operador.
- Verifique siempre la visibilidad del dispositivo en Plaspy después de aplicar la configuración para confirmar que el rastreador está informando como se espera.

## Por qué usar Plaspy con esta configuración

Usar MiniFinder Zepto con Plaspy ofrece visibilidad continua en tiempo real del vehículo, reporte de eventos y reproducción histórica de viajes en una sola plataforma. El factor de forma plug-and-play en OBD del Zepto provee alimentación continua y rendimiento GNSS fiable, mientras que Plaspy recibe e interpreta los mensajes del dispositivo en un servidor y puerto compartidos para un panel de control y reportes consistentes.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores GPS como el Zepto visite https://www.plaspy.com. Para las instrucciones de configuración específicas más recientes, la sintaxis de comandos y detalles de firmware, verifique la documentación oficial del fabricante en https://minifinder.se/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
