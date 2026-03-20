---
slug: /concox/vl505/configuration
id: vl505-configuration
sidebar_label: Configuration
title: Concox - VL505 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox VL505 con Plaspy, incluye ajustes de servidor, comandos SMS y lista de verificación práctica
keywords:
  - Configuración Concox VL505
  - Instalación Concox VL505
  - Integración VL505 Plaspy
  - Configuración GPS VL505
  - Configuración servidor Concox VL505
  - Configuración OBD II VL505
  - Configuración rastreador Plaspy
  - Configuración GPS Concox
  - Configuración SMS VL505
  - Rastreo de flotas VL505
---

# Concox - Configuración VL505

Esta página documenta el contexto público de configuración para usar el rastreador Concox VL505 con Plaspy. Se enfoca en los ajustes prácticos del servidor, los comandos SMS de configuración y el flujo de trabajo de instalación que puede seguir para preparar el VL505 y que reporte ubicación y eventos a Plaspy. Cuando están disponibles, incluimos ejemplos de comandos SMS y pasos de verificación que forman parte del método de configuración pública.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al aceptar conexiones. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VL505 admite configuración remota por SMS o plataformas en la nube, por lo que esta guía cubre los pasos públicos y comunes para apuntar el dispositivo a Plaspy y validar la conectividad.

## Resumen de configuración

Preparar el VL505 para su uso con Plaspy consiste principalmente en configurar el dispositivo para que envíe reportes por GPRS al punto final compartido de Plaspy y confirmar que el rastreador se registre correctamente en la plataforma. El VL505 admite comandos de configuración por SMS, que se usan frecuentemente para establecer el APN, la dirección del servidor, el transporte, el intervalo de reporte y el modo GPRS.

- Configure el APN y los parámetros GPRS para que el dispositivo pueda establecer una sesión de datos celular.
- Establezca el servidor GPRS hacia Plaspy usando el dominio o la IP proporcionados y el puerto compartido.
- Elija UDP o TCP como transporte si el dispositivo lo requiere y guarde los ajustes.
- Defina un intervalo de reporte adecuado para su caso de uso y habilite la operación GPRS.
- Verifique los ajustes con un comando de consulta del dispositivo y confirme que el rastreador es visible en Plaspy.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos de servidor al configurar el VL505 para que reporte a Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP son compatibles en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse el dispositivo

## Requisitos habituales antes de la configuración

- Acceso al vehículo para conectar el VL505 al puerto OBD II o para confirmar que el dispositivo tiene alimentación.
- Conectividad de datos activa para el dispositivo mediante una SIM o eSIM válida con el APN configurado.
- Acceso a un teléfono con capacidad SMS o a la herramienta del fabricante para enviar comandos SMS de configuración si utiliza aprovisionamiento vía SMS.
- Conocimiento del APN del operador y, opcionalmente, del usuario y contraseña del APN de la SIM.
- Acceso a la documentación oficial de Concox o a la herramienta de instalador para guías específicas del modelo y notas de firmware.
- Una cuenta o acceso a la plataforma Plaspy para confirmar que el dispositivo aparece y reporta correctamente tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El VL505 se configura para enviar datos de posición y eventos a través de datos celulares al punto final y puerto compartidos de Plaspy. Una vez que el dispositivo tenga una sesión de datos válida y se apliquen los ajustes del servidor, el rastreador transmitirá actualizaciones de ubicación y mensajes de eventos para que Plaspy los procese y muestre.

- El dispositivo reporta al punto final compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Todas las conexiones de dispositivos usan el puerto 8888 en el lado de Plaspy.
- Puede configurar el rastreador para usar transporte UDP o TCP en el puerto 8888 según los requisitos del dispositivo.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando el rastreador se conecta al servidor.
- Las actualizaciones de posición, eventos de movimiento y alertas configuradas se transmiten a Plaspy para visibilidad en tiempo real y reproducción histórica.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Concox para el VL505, como los comandos SMS o la herramienta de instalación documentada por Concox.
2. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP 54.85.159.138 al configurar el servidor GPRS en el rastreador.
3. Establezca el puerto del servidor GPRS en 8888 y asegúrese de que el dispositivo esté configurado para usar el puerto 8888 en los reportes.
4. Elija UDP o TCP como transporte si su dispositivo requiere una selección explícita de transporte.
5. Ingrese el APN del operador y, opcionalmente, el usuario y la contraseña del APN necesarios para la SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador o el firmware requieren un reinicio para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy consultando los parámetros del equipo y confirmando que el rastreador aparece y envía datos de posición en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El VL505 admite configuración por SMS. A continuación se muestran los comandos SMS públicos en el orden que aparece en la documentación del fabricante. Envíe estos SMS desde un número autorizado al IMEI del dispositivo según lo requiera Concox. Marque el restablecimiento de fábrica como opcional o solo para la configuración inicial cuando sea necesario.

- Restablecimiento de fábrica inicial (opcional)
```text
FACTORY#
```

- Establecer la zona horaria en UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador
```text
APN,[apn]#
```
O incluir usuario y contraseña opcionales del APN
```text
APN,[apn],[apnu],[apnp]#
```
Nota: [apn] es el APN del operador. [apnu] y [apnp] son marcadores de posición opcionales para usuario y contraseña del APN.

- Establecer el servidor GPRS usando el dominio de Plaspy (recomendado)
```text
SERVER,1,d.plaspy.com,8888,0#
```

- O establecer el servidor GPRS usando la IP de Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```

- Establecer el intervalo de actualización cada 60 segundos
```text
TIMER,60#
```
O formato alternativo de timer
```text
TIMER,60,60#
```

- Habilitar modo GPRS
```text
GPRSON,1#
```

- Verificar los parámetros GPRS actuales
```text
GPRSSET#
```

Utilice estos comandos en la secuencia apropiada para su despliegue. Los ejemplos del comando SERVER muestran tanto la opción por dominio como por IP y usan explícitamente el puerto 8888. El comando APN conserva los marcadores de posición para los valores específicos del operador.

## Notas de configuración

- Las versiones de firmware de Concox y las variantes regionales de hardware pueden cambiar la sintaxis exacta de los SMS o los parámetros disponibles; confirme siempre con la documentación del dispositivo proporcionada por Concox.
- La configuración por SMS es compatible y se usa comúnmente para el aprovisionamiento del VL505, pero también pueden existir herramientas del proveedor o sistemas de aprovisionamiento en la nube.
- Elija UDP o TCP según la fiabilidad de la red y cualquier guía en la documentación de Concox; ambos transportes son aceptados por Plaspy en el puerto 8888.
- Al usar el dominio d.plaspy.com, el rastreador depende de la resolución DNS de la red de la SIM del dispositivo; usar la IP 54.85.159.138 evita DNS, pero ambas opciones apuntan el dispositivo a Plaspy en el puerto 8888.
- Mantenga seguras las credenciales del APN y verifique los marcadores de usuario y contraseña opcionales antes de enviar comandos SMS.

## Por qué usar Plaspy con esta configuración

Configurar el VL505 para que reporte a Plaspy proporciona a las organizaciones ubicación en tiempo real, alertas de eventos y reproducción histórica para vehículos y activos. La forma factor OBD II del VL505 y su soporte para aprovisionamiento por SMS o en la nube facilitan el despliegue a gran escala, mientras que dirigir los datos a Plaspy permite a los gestores de flotas centralizar la supervisión, las notificaciones y el análisis.

Learn more about Plaspy and platform features at https://www.plaspy.com. For the latest device specific configuration details firmware notes and regional variant information verify setup instructions on the manufacturer site https://www.iconcox.com/.
