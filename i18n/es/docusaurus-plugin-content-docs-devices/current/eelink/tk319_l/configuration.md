---
slug: /eelink/tk319_l/configuration
id: tk319_l-configuration
sidebar_label: Configuration
title: EElink - TK319‑L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el EElink TK319‑L a Plaspy con ajustes de servidor compartido y ejemplos de comandos SMS
keywords:
  - Configuración EElink TK319 L
  - Instalación EElink TK319 L
  - Configuración TK319 L en Plaspy
  - Ajustes de servidor TK319 L
  - Configuración rastreador GPS EElink
  - Configuración de rastreadores Plaspy
  - Guía instalación rastreador de vehículo
  - Comandos SMS rastreador GPS
  - Configuración de rastreo de flotas
  - Integración de telemetría TK319 L
---

# EElink - TK319‑L Configuración

Esta página documenta el contexto público de configuración para usar el EElink TK319‑L con Plaspy. Reúne los ajustes de servidor de Plaspy y la guía práctica de instalación que permiten que el TK319‑L reporte ubicación y telemetría a la plataforma Plaspy usando los endpoints compartidos y los comandos de dispositivo disponibles públicamente.

Plaspy emplea los mismos ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas de configuración del proveedor. Cuando están disponibles, en esta guía se incluyen los comandos SMS del TK319‑L publicados por el fabricante para la configuración y verificación básicas.

## Resumen de la configuración

Esta configuración prepara el rastreador para comunicarse de forma fiable con Plaspy, indicando al dispositivo el endpoint compartido de Plaspy, definiendo los intervalos de reporte y verificando el estado de la conexión. El TK319‑L admite comandos de configuración vía SMS, que se usan habitualmente para establecer APN, servidor y parámetros de temporización antes de validar la conectividad en la plataforma.

- Configure el APN del dispositivo y los parámetros celulares para que tenga conectividad de datos hacia Plaspy.
- Apunte el rastreador al dominio o IP del servidor Plaspy y asegúrese de que el puerto sea el correcto.
- Establezca intervalos de reporte (por ejemplo un temporizador periódico) para que el rastreador envíe actualizaciones regulares a Plaspy.
- Verifique los parámetros y la conectividad usando el comando de comprobación del dispositivo o las herramientas del fabricante.
- Confirme que el dispositivo aparece en Plaspy y que se reciben los reportes de posición y eventos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP (el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888)
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Acceso al dispositivo y una batería de respaldo cargada o una fuente de alimentación para que la configuración persista.
- Una SIM de datos activa provisionada para NB‑IoT, LTE Cat M1 o datos GSM según requiera el rastreador y la red en su región.
- El APN del operador para la SIM (para ingresarlo como parámetro APN en la configuración).
- Capacidad para enviar comandos SMS desde un teléfono móvil o usar la herramienta de configuración del fabricante si la puesta a punto es vía SMS.
- Familiaridad básica con el manual del fabricante del TK319‑L o la herramienta de configuración para comportamientos específicos del modelo.

## Cómo se conecta este rastreador a Plaspy

El TK319‑L envía datos de ubicación y eventos a Plaspy informando al endpoint y puerto compartidos de Plaspy. Una vez configurados APN y parámetros de servidor, el rastreador establece una sesión de datos y transmite actualizaciones periódicas de ubicación y alarmas/eventos a Plaspy, donde aparecen en paneles y reportes.

- El rastreador se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte del dispositivo puede ser UDP o TCP según la configuración del dispositivo y las necesidades de la red.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes del TK319‑L.
- Actualizaciones periódicas basadas en temporizador y mensajes desencadenados por eventos ofrecen seguimiento en tiempo real y visibilidad operativa en Plaspy.
- Use la plataforma para verificar que se estén ingresando la ubicación, eventos ACC/ignición y señales de alarma.

## Flujo de configuración típico

1. Obtenga el manual del fabricante del TK319‑L o acceda al método oficial de configuración de EElink (comandos SMS o la herramienta del vendedor).
2. Asegúrese de que el rastreador tenga energía y una SIM activa con el APN correcto de su operador celular.
3. Ingrese el endpoint del servidor Plaspy configurando d.plaspy.com o 54.85.159.138 como servidor.
4. Ajuste el puerto a 8888 y elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure los intervalos de reporte (por ejemplo un temporizador de 60 segundos) y cualquier ajuste de zona horaria o regional necesario.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy y confirme que la ubicación y los eventos aparecen en la plataforma.

## Ejemplos de comandos de configuración

El TK319‑L soporta configuración vía SMS. A continuación están los comandos SMS públicos más usados, en el orden recomendado por el fabricante. Envíe cada línea como un mensaje SMS al número administrador del dispositivo.

- Reinicio opcional a fábrica (usar solo si necesita devolver el dispositivo a valores de fábrica):
```
FACTORY#
```

- Establecer la zona horaria a UTC+0 (ejemplo):
```
GMT,E,0#
```

- Configurar el APN del operador. Reemplace los marcadores con los valores de su operador:
```
APN,[apn]# 
```
Si su operador requiere usuario y contraseña inclúyalos así:
```
APN,[apn],[apnu],[apnp]#
```
Nota: [apn] es la cadena APN de la red, [apnu] es el usuario APN si se requiere y [apnp] es la contraseña APN si se requiere.

- Configurar el servidor GPRS por dominio (recomendado para claridad):
```
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS por dirección IP:
```
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización periódica a 60 segundos:
```
TIMER,60#
```

- Consultar los parámetros actuales:
```
PARAM#
```

Siga el orden de comandos anterior cuando la secuencia sea importante. Use el reinicio de fábrica solo cuando sea necesario. Después de enviar los ajustes de servidor y APN, permita que el dispositivo se registre en la red y verifique la conectividad en Plaspy.

## Notas de configuración

- Las variaciones de firmware y regionales pueden cambiar la sintaxis de los comandos o los parámetros requeridos; siempre verifique la sintaxis contra el manual del dispositivo para su revisión de firmware.
- Elija UDP o TCP según la fiabilidad de la red y sus necesidades operativas; algunas redes pueden favorecer un transporte sobre otro.
- La configuración vía SMS es un método público común para el TK319‑L; las herramientas del fabricante o el software de aprovisionamiento pueden ofrecer alternativas de configuración masiva o remota.
- Use la configuración de servidor por dominio (d.plaspy.com) cuando sea posible para que el DNS pueda manejar cambios en la infraestructura; la opción de IP se proporciona cuando DNS no está disponible.
- Tras la configuración, espere algunos minutos a que el dispositivo se registre en la red celular y comience a reportar a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el TK319‑L con Plaspy permite a las organizaciones recopilar telemetría continua de ubicación y eventos en una única plataforma de gestión de flotas. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolos simplifican la incorporación para que el dispositivo pueda empezar a entregar posiciones GPS/LBS, eventos ACC/ignición y señales de alarma a paneles y reportes para monitoreo operativo, reproducción de rutas y alertas.

Aprenda más sobre Plaspy en https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que es recomendable verificar la información de instalación más reciente en el sitio del fabricante https://www.eelink.com.cn/ antes del despliegue.
