---
slug: /castel/mpip_618w_yb/configuration
id: mpip_618w_yb-configuration
sidebar_label: Configuration
title: Castel - MPIP-618W-YB Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Castel MPIP-618W-YB con Plaspy, ajustes de servidor y ejemplos de comandos SMS
keywords:
  - Configuración Castel MPIP-618W-YB
  - Instalación Castel MPIP-618W-YB
  - MPIP-618W-YB configuración Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador de vehículo Castel
  - Guía configuración MPIP
  - Configuración software de rastreo
  - Configuración plataforma GPS Castel
  - Integración rastreador Plaspy
  - Configuración servidor seguimiento vehículo
---

# Castel - Configuración MPIP-618W-YB

Esta página documenta el contexto público de configuración para usar el rastreador Castel MPIP-618W-YB con Plaspy. Se concentra en los ajustes compartidos del servidor Plaspy que debe aplicar al dispositivo para que el tracker envíe en tiempo real posición, velocidad y alertas a Plaspy para monitoreo e informes. Cuando el equipo admite configuración por SMS en campo, se incluyen ejemplos de comandos según las instrucciones públicas del fabricante.

Plaspy usa un único endpoint y puerto compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar un protocolo dentro de Plaspy. Los pasos precisos del fabricante para configurar el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o la herramienta del proveedor; los ejemplos a continuación reflejan los comandos SMS públicos y el flujo general comúnmente usados para apuntar este rastreador a Plaspy.

## Resumen de la configuración

El objetivo del proceso de configuración es dejar el MPIP-618W-YB listo para comunicarse de forma estable con Plaspy y aparecer en la plataforma para rastreo en vivo y notificaciones. Para dispositivos que permiten configuración por SMS, parámetros como el APN y el endpoint del servidor suelen establecerse enviando instrucciones SMS estructuradas a la unidad.

- Establecer el APN del dispositivo y el endpoint del servidor para que el tracker use GPRS y alcance Plaspy.
- Configurar el transporte y el puerto para que el tráfico del dispositivo sea aceptado por Plaspy en el endpoint compartido.
- Verificar la conectividad y que el tracker informe correctamente posición y alertas a Plaspy.
- Utilizar el ID del dispositivo y la clave secreta SMS por defecto para enviar comandos de configuración si es necesario.
- Validar la configuración con el comando de verificación del dispositivo antes del despliegue final.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse en UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un MPIP-618W-YB con alimentación e instalado, con acceso al ID del dispositivo o número de serie para derivar la clave por defecto.
- Una SIM funcional con datos y capacidad de SMS configurada en el rastreador cuando se usa GPRS.
- Los valores APN correctos del operador de la SIM para permitir conectividad GPRS.
- Acceso al método de configuración del fabricante, como comandos SMS o una herramienta del proveedor.
- Conocimiento básico de la clave secreta del dispositivo; por defecto la clave SMS es los últimos seis caracteres ASCII del ID del dispositivo según las instrucciones públicas del fabricante.
- Un plan para validar los reportes en Plaspy una vez configurado el equipo.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el MPIP-618W-YB envía ubicación, movimiento y eventos de alerta al endpoint y puerto compartido de Plaspy para que los operadores de flota puedan ver y responder los eventos desde la plataforma. El dispositivo usa GPRS como transporte y también puede aceptar configuración vía SMS cuando está soportado.

- El tracker se configura para enviar tráfico GPRS a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP en el puerto 8888 según la configuración.
- Plaspy recibe y detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo dentro de la plataforma.
- Mensajes de posición, velocidad y alertas se reenvían al centro de monitoreo de Plaspy para visualización en tiempo real.
- Se pueden usar comandos de verificación o consultas para confirmar el APN y los ajustes del servidor en el dispositivo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Castel para el MPIP-618W-YB, como el formato de comandos SMS descrito por el proveedor o una herramienta aprobada.
2. Prepare los valores APN para su SIM y conozca la clave secreta del dispositivo (la clave por defecto son los últimos 6 caracteres ASCII del ID del dispositivo).
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en la pantalla de configuración o en el comando del dispositivo.
4. Configure el puerto del dispositivo en 8888 y elija UDP o TCP si el equipo requiere selección de transporte.
5. Aplique o guarde la configuración en el dispositivo y envíe cualquier comando de confirmación requerido.
6. Reinicie el dispositivo si el fabricante o el firmware exige reboot para que los cambios tengan efecto.
7. Valide que el dispositivo reporta a Plaspy comprobando el estado en la plataforma o usando el comando de verificación vía SMS.

## Ejemplos de comandos de configuración

El MPIP-618W-YB admite configuración por SMS según las instrucciones públicas del fabricante. Use la clave secreta del dispositivo y reemplace los marcadores de APN con los valores de su operador. La clave secreta SMS por defecto son los últimos seis caracteres ASCII del ID del dispositivo.

- Establecer APN GPRS y apuntar el tracker a la IP y puerto del servidor Plaspy

```
*[SecretKey]#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

Explicación:
- [SecretKey] — Clave secreta SMS para comandos. Por defecto son los últimos 6 caracteres ASCII del ID del dispositivo a menos que se haya cambiado.
- [apn] — Nombre del APN para el operador de la SIM.
- [apnu] — Usuario del APN si el operador lo requiere; dejar vacío si no es necesario.
- [apnp] — Contraseña del APN si el operador la requiere; dejar vacío si no es necesaria.
- El comando establece el APN y configura el equipo para enviar datos a Plaspy en 54.85.159.138 puerto 8888.

- Consultar la configuración GPRS actual para verificar

```
*[SecretKey]#get gprs#*
```

Envíe el SMS anterior desde un número autorizado al dispositivo para recibir los parámetros GPRS configurados. Si el dispositivo devuelve el servidor y puerto configurados, confirme que los valores coinciden con 54.85.159.138 y 8888 (o que d.plaspy.com se resuelva al mismo endpoint en su entorno).

## Notas de configuración

- Variaciones de firmware y revisiones de hardware pueden cambiar la sintaxis exacta del SMS o los comandos disponibles; consulte la guía del fabricante para la unidad en uso.
- Puede configurar el servidor usando el dominio d.plaspy.com o la IP 54.85.159.138; ambos son compatibles públicamente con Plaspy.
- Elija UDP o TCP según sus necesidades de instalación; el dispositivo soporta ambos transportes y Plaspy detectará el protocolo automáticamente.
- Si utiliza configuración por SMS, asegúrese de enviar comandos desde un número autorizado y de usar la clave secreta correcta del dispositivo.
- Verifique siempre los ajustes con el comando de verificación antes de desplegar múltiples unidades.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Castel MPIP-618W-YB permite una visibilidad centralizada de la ubicación del vehículo, velocidad y eventos de alerta en toda la flota. Configurar el rastreador para que reporte al endpoint y puerto compartidos de Plaspy simplifica el despliegue porque Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener los comandos de configuración específicos más actuales, detalles de firmware y guías de instalación verifique la información en el sitio del fabricante http://www.castelecom.com/ ya que los métodos de configuración del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
