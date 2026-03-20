---
slug: /castel/mpip_618_wa/configuration
id: mpip_618_wa-configuration
sidebar_label: Configuration
title: Castel - MPIP-618-WA Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Castel MPIP-618-WA en Plaspy con ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - Configuración Castel MPIP-618-WA
  - Instalación Castel MPIP-618-WA
  - Configuración MPIP-618-WA Plaspy
  - Configuración rastreador GPS Castel
  - Configuración servidor Plaspy
  - Configuración SMS rastreador GPS
  - Configuración plataforma seguimiento vehicular
  - Seguimiento de flotas MPIP-618-WA
  - Configuración rastreador OBD GPS
  - Configuración servidor rastreador Castel
---

# Castel - Configuración MPIP-618-WA

Esta página describe el contexto público de configuración para usar el rastreador Castel MPIP-618-WA con la plataforma Plaspy. Se concentra en los ajustes prácticos del servidor y el flujo de configuración comúnmente usados para conectar este dispositivo a Plaspy, de modo que el rastreador pueda reportar ubicación y datos diagnósticos a su cuenta.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; esta guía resalta los puntos públicos de SMS y configuración conocidos para el MPIP-618-WA y cómo aplicar los valores de servidor de Plaspy.

## Resumen de la configuración

El objetivo es preparar el MPIP-618-WA para comunicarse de forma fiable con Plaspy y que aparezca y reporte correctamente en la plataforma. Para este equipo el fabricante ofrece varios métodos de configuración, incluyendo comandos SMS, COTA o software para PC; los ejemplos siguientes usan el formato de comandos SMS que está públicamente documentado.

- Configure el APN GPRS y el destino del servidor para que el rastreador envíe datos a Plaspy.
- Seleccione el protocolo de transporte (UDP o TCP) y el puerto objetivo según los requisitos de Plaspy.
- Valide la conectividad y confirme que el dispositivo reporte al endpoint de Plaspy.
- Use la contraseña del dispositivo o la clave secreta al enviar comandos SMS de configuración.
- Verifique que Plaspy reciba la telemetría y haga pequeños ajustes según diferencias de firmware.

## Ajustes del servidor Plaspy

Use los siguientes valores de conexión de Plaspy al configurar el MPIP-618-WA:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en la plataforma

## Requisitos típicos antes de la configuración

- Unidad MPIP-618-WA alimentada y accesible, instalada o conectada vía puerto OBD según sea necesario.
- Tarjeta SIM válida con servicio de datos GPRS activo y el APN correcto para su operador móvil.
- Capacidad para enviar comandos SMS al dispositivo o acceso al software de PC del fabricante o al método COTA.
- Información de identificación del dispositivo necesaria para derivar la clave secreta SMS si el rastreador lo requiere.
- Familiaridad básica con marcadores de APN como {{apn}}, {{apnu}} y {{apnp}} al aplicar plantillas SMS.
- Un breve periodo para validar y probar tras la configuración, de modo que confirme que el dispositivo reporta a Plaspy.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el MPIP-618-WA envía datos de ubicación y del dispositivo a Plaspy usando el endpoint y puerto compartidos. Plaspy recibe esos paquetes y los asigna al dispositivo correcto mediante el protocolo del rastreador, que Plaspy detecta automáticamente.

- El rastreador se configura para reportar al dominio o IP del servidor Plaspy en el puerto 8888.
- Los datos se envían por UDP o TCP según el transporte elegido durante la configuración.
- Plaspy interpreta los paquetes entrantes y los asocia con el perfil del dispositivo.
- Cuando el reporte está establecido, las actualizaciones de ubicación y los eventos diagnósticos se muestran en Plaspy.
- Las validaciones periódicas ayudan a asegurar que las alarmas y los informes relacionados con OBD se reciban según lo esperado.

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante para el MPIP-618-WA, como comandos SMS, COTA o el software de PC.
2. Ingrese el host del servidor Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo.
3. Configure el puerto de destino en 8888; tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo solicita una elección.
5. Guarde o aplique la configuración en el rastreador y reinicie el equipo si las instrucciones del fabricante lo recomiendan.
6. Valide que el dispositivo reporte a Plaspy y confirme la visibilidad de ubicación y eventos en la plataforma.
7. Si es necesario, use los comandos de verificación del dispositivo o las herramientas del fabricante para leer las configuraciones GPRS y de servidor.

## Comandos de configuración de ejemplo

El MPIP-618-WA soporta configuración vía SMS. El fabricante documenta que los comandos SMS están protegidos por una clave secreta. La clave secreta por defecto para las instrucciones SMS es los últimos 6 caracteres ASCII del ID del dispositivo. Envíe los comandos de configuración como mensajes SMS al número del rastreador.

Configurar el APN GPRS y el destino del servidor
- Reemplace {{SecretKey}} por la clave secreta SMS del dispositivo
- Reemplace {{apn}}, {{apnu}}, {{apnp}} por el APN, usuario APN y contraseña APN de su operador según corresponda

```
*{{SecretKey}}#set gprs#{{apn}},{{apnu}},{{apnp}},54.85.159.138,8888*
```

Verificar la configuración GPRS en el dispositivo

```
*{{SecretKey}}#get gprs#*
```

Notas sobre marcadores y uso
- {{SecretKey}} es la contraseña para comandos SMS; por defecto es los últimos 6 caracteres ASCII del ID del dispositivo para este rastreador.
- {{apn}} es el nombre del punto de acceso (APN) del operador de la SIM; {{apnu}} y {{apnp}} son opcionales y corresponden al usuario y contraseña del APN.
- Envíe estos comandos como texto SMS simple al número asignado al rastreador.
- El orden de los parámetros en el comando set es importante y sigue la sintaxis del fabricante: APN, usuario APN, contraseña APN, IP del servidor, puerto del servidor.

## Observaciones sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis SMS exacta o los parámetros disponibles; siempre consulte las notas de versión del fabricante si el comportamiento difiere.
- El MPIP-618-WA admite múltiples canales de configuración; si SMS no está disponible, utilice COTA o la herramienta de PC provista por Castel.
- Elija UDP o TCP según su entorno de red y el comportamiento del equipo; ambos transportes son compatibles con Plaspy en el puerto 8888.
- Mantenga segura la gestión de la clave secreta y confirme el método para derivar la clave por defecto a partir del ID del dispositivo antes de enviar comandos.
- Tras aplicar los ajustes, espere un breve periodo para que el equipo se registre en la red y para que Plaspy reciba los primeros paquetes.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Castel MPIP-618-WA brinda una forma práctica de centralizar la ubicación de los vehículos y la información diagnóstica OBD en una sola plataforma. Con el MPIP-618-WA configurado para reportar al endpoint y puerto compartidos de Plaspy, los operadores de flota obtienen visibilidad casi en tiempo real de la posición y los eventos de los vehículos, aprovechando la detección automática de protocolos de Plaspy para reducir la configuración manual de mapeos de protocolo.

Para conocer más sobre Plaspy y cómo soporta una amplia gama de rastreadores, visite https://www.plaspy.com. Para los comandos específicos más recientes, notas de firmware y guías de instalación del MPIP-618-WA, verifique la información actual en el sitio del fabricante http://www.castelecom.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
