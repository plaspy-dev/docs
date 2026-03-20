---
slug: /navtelekom/smart_s_2422/configuration
id: smart_s_2422-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-2422 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar Navtelekom СМАРТ S-2422 con Plaspy usando parámetros de servidor y pasos prácticos
keywords:
  - Navtelekom СМАРТ S-2422
  - Configuración Navtelekom SMART S-2422
  - Configuración SMART S-2422
  - Configuración de rastreador Plaspy
  - Rastreador GPS de vehículo Plaspy
  - Configuración de rastreador Navtelekom
  - Configuración de plataforma GPS
  - Configuración de seguimiento de flotas
  - Ajustes de servidor S-2422
  - Configuración de telemática GPS
---

# Navtelekom - Configuración del СМАРТ S-2422

Esta página describe el contexto público de configuración para usar el rastreador Navtelekom СМАРТ S-2422 con Plaspy. Explica los parámetros de conexión públicos de Plaspy y detalla los pasos prácticos que normalmente se siguen para dejar el dispositivo listo y que reporte posición y telemetría a la plataforma Plaspy. La orientación aquí se concentra en las funciones públicas proporcionadas por el fabricante y en los parámetros del servidor de Plaspy necesarios para la conexión.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Use esta página como referencia práctica para aplicar los valores de conexión de Plaspy al S-2422 y consulte la documentación de Navtelekom para comandos específicos del dispositivo y detalles avanzados de firmware.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el S-2422 para una comunicación fiable con Plaspy, de modo que la ubicación, los eventos de entradas digitales y la telemetría de sensores externos se envíen a los paneles y reportes de Plaspy. Esto implica establecer el endpoint del servidor Plaspy en el dispositivo, confirmar la conectividad de red y validar que Plaspy reciba y analice automáticamente el protocolo del rastreador.

- Ingresar los ajustes del servidor Plaspy en el dispositivo mediante la herramienta del fabricante o la interfaz SMS cuando corresponda
- Configurar el transporte y el puerto para que el S-2422 transmita al endpoint de Plaspy
- Verificar la conectividad celular y que la SIM tenga un plan de datos 2G en caso de que la instalación lo requiera
- Confirmar que la telemetría de GNSS, entradas digitales, RS-485 y sensores 1-Wire llegue a Plaspy
- Validar salidas de control remoto y el comportamiento de accesorios cuando formen parte del flujo operativo

## Parámetros del servidor Plaspy

Use los siguientes ajustes públicos de conexión de Plaspy al configurar el Navtelekom СМАРТ S-2422:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados por la plataforma y que la detección de protocolo se realiza en la plataforma una vez que el dispositivo comienza a enviar datos.

## Requisitos habituales antes de la configuración

- Alimentación del vehículo conectada y cableado estable, ya que el S-2422 está diseñado para instalaciones con conexión permanente y sin batería interna
- Una tarjeta SIM GSM 2G operativa y provisionada para datos cuando la red local soporte 2G
- Acceso físico al dispositivo y a las antenas para comprobar la calidad de señal GNSS y GSM
- Acceso al método oficial de configuración del fabricante, como el NTC Configurator, o a los pasos de configuración proporcionados por el proveedor
- IMEI del dispositivo y credenciales de instalador necesarias para la herramienta del fabricante o la configuración por SMS
- Una cuenta de Plaspy o acceso de administrador a la organización objetivo en Plaspy para la validación final

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el СМАРТ S-2422 envía coordenadas GNSS y telemetría a través del enlace celular al endpoint y puerto del servidor Plaspy para que la plataforma pueda visualizar, registrar y reaccionar ante eventos. Plaspy recibe el flujo entrante del dispositivo y detecta automáticamente el protocolo del rastreador para analizar la posición y los datos de sensores.

- El dispositivo reporta actualizaciones de ubicación GNSS a d.plaspy.com en el puerto 8888 usando UDP o TCP
- Los eventos de entradas digitales y los estados de salidas de control se incluyen en la telemetría enviada a Plaspy
- Sensores externos conectados por RS-485 y 1-Wire se transmiten como parte del flujo de telemetría del dispositivo
- Plaspy procesa los datos entrantes y los hace disponibles en paneles, reglas y reportes
- La detección automática de protocolo en Plaspy elimina la necesidad de seleccionar manualmente un protocolo en la plataforma

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante, como el NTC Configurator, o siga los procedimientos SMS/CLI proporcionados por el proveedor.
2. Ingrese la dirección del servidor Plaspy por nombre o IP usando d.plaspy.com o 54.85.159.138 en el campo del servidor.
3. Configure el puerto del dispositivo en 8888, que es el puerto que usa Plaspy para todos los dispositivos soportados.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Aplique o guarde la configuración en la herramienta del fabricante y envíe los ajustes al dispositivo.
6. Reinicie o aplique un ciclo de energía al dispositivo si el firmware lo exige para activar los nuevos parámetros de red.
7. Valide que el dispositivo aparezca y reporte en Plaspy y confirme que la telemetría de GNSS, entradas digitales y sensores externos sea visible.

## Ejemplos de comandos de configuración

La sintaxis exacta de los comandos y el método de configuración para el СМАРТ S-2422 dependen de la herramienta del fabricante y de la versión de firmware. Los dispositivos Navtelekom suelen configurarse con el NTC Configurator o mediante comandos SMS documentados por el proveedor. Debido a que los comandos y formatos del fabricante pueden variar entre versiones de firmware, consulte la documentación oficial de Navtelekom o la ayuda del NTC Configurator para la sintaxis exacta y cualquier marcador de posición requerido por su instalación.

## Notas de configuración

- Las variaciones de firmware pueden cambiar las opciones de configuración disponibles y las rutas exactas de menús o comandos en el NTC Configurator.
- Elija UDP o TCP según su entorno de red y las recomendaciones de su proveedor de conectividad; Plaspy aceptará cualquiera de los dos en el puerto 8888.
- Verifique la disponibilidad de la red 2G en su área de operación, ya que el S-2422 usa un módem GSM 2G y una sola ranura para SIM.
- Bluetooth 4.0 puede utilizarse para configuración local o emparejamiento de accesorios cuando el firmware del dispositivo lo soporte, pero los ajustes principales del servidor deben establecerse mediante el método oficial de configuración.
- Use el mecanismo de gestión remota DRC si está disponible para mantener el firmware alineado con las recomendaciones de compatibilidad de Plaspy.

## Ventajas de usar Plaspy con esta configuración

Configurar el Navtelekom СМАРТ S-2422 para que reporte a Plaspy ofrece visibilidad continua del vehículo y consolida la posición GNSS, los eventos de E/S digitales y la telemetría de sensores externos en una sola plataforma telemática. Esta configuración soporta flujos de trabajo comunes en flotas como seguimiento en tiempo real, monitoreo de combustible y acciones de control remoto, lo que permite a despachadores y administradores tomar decisiones basadas en datos precisos de ubicación y sensores.

Conozca más sobre Plaspy y cómo puede visualizar y gestionar telemetría de dispositivos compatibles en https://www.plaspy.com. Para los comandos de configuración específicos más recientes, notas de firmware y detalles de hardware consulte al fabricante en https://www.navtelecom.ru/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
