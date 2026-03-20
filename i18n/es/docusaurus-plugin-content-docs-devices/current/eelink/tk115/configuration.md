---
slug: /eelink/tk115/configuration
id: tk115-configuration
sidebar_label: Configuration
title: EElink - TK115 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador EElink TK115 a Plaspy con ajustes de servidor y comandos SMS de ejemplo
keywords:
  - Configuración EElink TK115
  - Instalación EElink TK115
  - Configuración TK115 en Plaspy
  - Configuración de rastreador Plaspy
  - Configuración rastreador GPS EElink
  - Ajustes de servidor TK115
  - Comandos SMS TK115
  - Guía de instalación EElink
  - Integración rastreador GPS con Plaspy
  - Rastreo de vehículos TK115
---

# EElink - Configuración del TK115

Esta página describe el contexto público de configuración para usar el rastreador GPS EElink TK115 con Plaspy. Explica los ajustes de servidor que debe aplicar en el dispositivo desde el lado de Plaspy, muestra comandos SMS de ejemplo incluidos en la documentación pública del TK115 y detalla el flujo práctico para preparar el rastreador y que comience a reportar a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El TK115 admite cambios por SMS y reportes por GPRS; a continuación encontrará comandos SMS de ejemplo para las acciones de configuración más comunes.

## Visión general de la configuración

El objetivo de la configuración es apuntar el TK115 a Plaspy, confirmar que el dispositivo puede comunicarse con la plataforma y habilitar el envío fiable de ubicación y eventos. Con los comandos públicos que se muestran puede establecer el APN del dispositivo, registrar el servidor de Plaspy y verificar parámetros por SMS.

- Configure los parámetros GPRS y del servidor para que el TK115 informe a Plaspy
- Valide la conectividad de red y la configuración del APN para permitir el envío de datos
- Defina intervalos de reporte y parámetros básicos de telemetría según sus necesidades de monitoreo
- Confirme que el rastreador aparezca en Plaspy después de aplicar los ajustes y reiniciar el dispositivo
- Utilice el comando PARAM para verificar la configuración aplicada

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes de dispositivos

Todos los dispositivos de Plaspy usan el mismo puerto y la plataforma intentará identificar el protocolo del rastreador automáticamente después de que el dispositivo comience a enviar datos.

## Requisitos típicos antes de la configuración

- Una unidad TK115 con alimentación y acceso físico para enviar comandos SMS o usar la herramienta del fabricante
- Una tarjeta SIM activada con GPRS/datos habilitados y el APN correcto del operador móvil
- Acceso al método de envío de comandos SMS del dispositivo o al software de configuración oficial de EElink
- Una cuenta o proyecto en Plaspy donde pueda confirmar que el dispositivo aparece cuando empiece a reportar
- Conocimiento de los marcadores necesarios como el APN del operador móvil (vea los comandos más abajo)
- Un plan para reiniciar o hacer un ciclo de energía del dispositivo después de la configuración si fuera necesario

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TK115 envía reportes GPRS al endpoint del servidor de Plaspy en d.plaspy.com (o la IP 54.85.159.138) en el puerto 8888. Plaspy procesa los mensajes del rastreador y los mapea en la plataforma donde la ubicación, el estado y los eventos de alarma quedan visibles para los usuarios.

- El rastreador se apunta al endpoint y puerto de Plaspy y envía reportes periódicos
- Plaspy recibe coordenadas GPS/LBS y mensajes de estado del dispositivo para visibilidad
- Los eventos de alarma y estado se reenvían a Plaspy para alertas y activación de flujos de trabajo
- El transporte puede configurarse como UDP o TCP en el dispositivo mientras Plaspy gestiona la detección automática del protocolo
- Los intervalos de actualización del dispositivo controlan la frecuencia con la que el TK115 envía datos de posición y estado

## Flujo típico de configuración

1. Acceda al método oficial de configuración de EElink para el TK115, normalmente comandos SMS o la herramienta y documentación del proveedor.
2. Configure el APN del dispositivo para que coincida con la SIM del operador usando el comando APN, incluyendo el nombre de usuario y la contraseña si aplica.
3. Ingrese la información del servidor de Plaspy añadiendo d.plaspy.com o la IP 54.85.159.138 como servidor TARGET.
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el TK115 requiere elegir el transporte.
5. Aplique o guarde la configuración en el dispositivo (los comandos SMS se aplican cuando el dispositivo acepta el mensaje).
6. Reinicie o haga un ciclo de energía del rastreador si el firmware lo requiere para activar los nuevos ajustes.
7. Valide que el dispositivo está reportando a Plaspy revisando la plataforma en busca de datos entrantes o utilizando el comando PARAM de verificación del TK115.

## Comandos de configuración de ejemplo

La configuración pública del TK115 utiliza comandos SMS. Envíe estos comandos en el orden mostrado al realizar una configuración inicial o de fábrica. Mantenga los marcadores tal como se indican.

- Reset opcional de fábrica (usar solo cuando se requiera un reinicio de fábrica inicial)
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador
```text
APN,[apn]{{apnu_and_apnp}}#
```
Explicación: reemplace [apn] por el APN de su operador móvil. Si su operador requiere nombre de usuario y contraseña del APN, inclúyalos en los campos separados por comas tal como indica la sintaxis original del dispositivo. El marcador [apnu] representa el nombre de usuario del APN y [apnp] representa la contraseña del APN cuando sea necesario. Ejemplo ampliado cuando se requiere usuario y contraseña:
```text
APN,[apn],[apnu],[apnp]#
```

- Establecer el servidor GPRS al dominio de Plaspy (forma DNS preferida)
```text
SERVER,1,d.plaspy.com,8888#
```

- Alternativamente, establecer el servidor GPRS a la IP de Plaspy
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización periódico a 60 segundos
```text
TIMER,60#
```

- Verificar parámetros actuales
```text
PARAM#
```

Notas sobre los comandos:
- Envíe cada comando SMS como un único mensaje al número de control del TK115.
- El comando SERVER acepta tanto el dominio d.plaspy.com como la IP 54.85.159.138; el puerto debe ser 8888 como se muestra.
- Use el comando APN con los valores de su operador; mantenga los marcadores si debe sustituir las credenciales del APN del operador.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS o la disponibilidad de comandos; siempre verifique con la documentación de EElink para su versión de firmware.
- Muchos instaladores prefieren enviar estos comandos por SMS para dispositivos en campo; las herramientas del proveedor o la configuración por USB también pueden estar disponibles desde EElink para programación masiva.
- Elija UDP o TCP según las opciones del dispositivo; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y realiza la detección automática del protocolo en el servidor.
- Al usar el comando SERVER puede emplear el dominio d.plaspy.com o la IP 54.85.159.138; ambos deben usar el puerto 8888.
- Después de aplicar los ajustes, confirme que el dispositivo reporta en Plaspy y utilice PARAM# para comprobar la configuración activa en el dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el EElink TK115 para reportar a Plaspy proporciona a las organizaciones un camino sencillo hacia la visibilidad en tiempo real de ubicaciones, alarmas y estados. Con las funciones del TK115 enfocadas a vehículos, como detección de ACC y control de relé opcional, la conexión a Plaspy facilita flujos de trabajo antirobo, monitoreo operativo y alertas automatizadas dentro de una única plataforma.

To learn more about Plaspy and how to manage devices at scale visit https://www.plaspy.com. Device specific configuration methods and firmware behavior can change over time, so verify the latest setup details on the manufacturer website https://www.eelink.com.cn/.
