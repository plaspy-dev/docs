---
slug: /globalsat/tr_520/configuration
id: tr_520-configuration
sidebar_label: Configuration
title: GlobalSat - TR-520 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat TR-520 y reportar a Plaspy con ejemplos SMS y ajustes de servidor
keywords:
  - Configuración GlobalSat TR-520
  - Ajustes GlobalSat TR-520
  - GlobalSat TR-520 Plaspy
  - Configuración de servidor TR-520
  - Configuración rastreador GPS TR-520
  - Configuración de dispositivo Plaspy
  - Configuración rastreador GlobalSat
  - Configuración plataforma de seguimiento TR-520
  - Guía configuración rastreador GPS
  - Seguimiento de activos vehiculares TR-520
---

# GlobalSat - Configuración del TR-520

Esta página documenta el contexto público de configuración para usar el GlobalSat TR-520 con Plaspy. Se centra en los ajustes de servidor prácticos y en el ejemplo de configuración por SMS que el fabricante publica, y muestra cómo aplicar esos parámetros para que el dispositivo reporte a Plaspy y pueda integrarse en flujos de telemetría y seguimiento.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TR-520 admite configuración por SMS en el ejemplo público que se muestra abajo y también transmite datos a través de redes de área amplia de baja potencia; siga las instrucciones del fabricante para pasos específicos del dispositivo.

## Resumen de la configuración

El objetivo de este proceso es preparar el TR-520 para comunicarse de forma confiable con Plaspy y validar que el dispositivo aparezca en su cuenta. El ejemplo público para este modelo usa comandos SMS para establecer el APN y los parámetros del servidor, y luego reinicia el dispositivo para que los cambios entren en vigor.

- Configure el APN y los parámetros de red del dispositivo para que el TR-520 pueda conectarse vía LTE‑M o NB‑IoT.
- Apunte el rastreador al endpoint y puerto del servidor de Plaspy para que los datos se entreguen a la plataforma.
- Seleccione el transporte UDP o TCP en el rastreador si la interfaz del dispositivo lo requiere.
- Guarde y aplique los ajustes, luego reinicie el rastreador para que comience a reportar a Plaspy.
- Valide la visibilidad del dispositivo y la telemetría dentro de Plaspy una vez que el dispositivo esté en línea.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar el protocolo en la plataforma
- Todos los dispositivos en Plaspy usan el mismo puerto para reportar

## Requisitos habituales antes de la configuración

- Una SIM instalada en el rastreador con capacidad de datos y SMS si pretende usar la configuración por SMS.
- Alimentación y preparación básica del dispositivo (batería cargada o conexión a energía) para que pueda reiniciarse y registrarse en la red.
- El IMEI del rastreador disponible para comandos e identificación del dispositivo.
- Acceso al método de configuración del fabricante apropiado para su dispositivo y firmware (SMS, aplicación móvil o herramienta del proveedor).
- Cobertura de red móvil para LTE‑M o NB‑IoT en el área de despliegue para que el rastreador pueda alcanzar a Plaspy.
- Credenciales o conocimiento de los ajustes APN del operador celular (use los marcadores de posición si es necesario).

## Cómo se conecta este rastreador a Plaspy

Cuando esté configurado, el TR-520 reportará ubicación, eventos de movimiento y estado del dispositivo al endpoint compartido de Plaspy. Plaspy recibe los informes entrantes en el mismo puerto para todos los dispositivos y determina automáticamente el protocolo del dispositivo para procesar los mensajes.

- El rastreador se configura para enviar datos al endpoint de Plaspy d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888.
- El transporte puede configurarse como UDP o TCP dependiendo de la interfaz de configuración del rastreador.
- Plaspy realiza detección automática de protocolo para que la plataforma pueda ingerir los mensajes del rastreador sin selección manual del protocolo.
- Tras la configuración y el reinicio, el dispositivo debería registrarse y aparecer en Plaspy para monitoreo, procesamiento de reglas e informes históricos.
- Mensajes periódicos de telemetría y de eventos mantienen a Plaspy actualizado sobre la ubicación, el movimiento y el estado del dispositivo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante para el TR-520 (por ejemplo, comandos SMS o la app del proveedor) tal como lo provee GlobalSat.
2. Establezca el APN y las credenciales del operador necesarias para que el dispositivo obtenga conexión de datos.
3. Ingrese d.plaspy.com o la IP del servidor 54.85.159.138 como endpoint del servidor en la configuración del dispositivo.
4. Configure el puerto del servidor en 8888 y seleccione UDP o TCP como transporte si el dispositivo exige una selección explícita.
5. Aplique o guarde la configuración en el dispositivo; si usa SMS, envíe el comando del fabricante que programe esos ajustes.
6. Reinicie o apague y encienda el dispositivo si el método de configuración lo requiere para que los nuevos parámetros surtan efecto.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su panel o lista de dispositivos de la plataforma.

## Ejemplos de comandos de configuración

El contenido público del fabricante para el TR-520 muestra comandos basados en SMS. El proveedor también indica una cadena de formato utilizada por Plaspy para los mensajes. Use los siguientes ejemplos públicos de comandos SMS para establecer APN y parámetros de servidor y para reiniciar el dispositivo. Conserve los marcadores de posición mostrados y reemplácelos por sus valores antes de enviar.

Notas sobre los marcadores de posición
- [imei] — el número IMEI del dispositivo usado en el comando SMS para dirigirse a ese rastreador específico.
- [apn] — la cadena APN del operador celular de su SIM.
- [apnu] — nombre de usuario del APN si el operador lo requiere.
- [apnp] — contraseña del APN si el operador lo requiere.
- [checksum] y [checksumreeboot] — valores checksum hexadecimales de dos caracteres calculados que requiere el protocolo SMS del equipo (vea la explicación del checksum más abajo).

La cadena de formato referenciada por los materiales del fabricante incluye un ejemplo de cadena de formato usado por Plaspy:
TSPRXAB27GHKLMnaicz*U!

Comando de configuración (reemplazar marcadores y calcular checksum):
```
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

Comando de reinicio (opcional o cuando sea necesario para aplicar los cambios):
```
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Cálculo del checksum
- El ejemplo público calcula un checksum al aplicar XOR a los códigos de carácter del texto del comando hasta, pero sin incluir, el carácter '*' y luego convertir el resultado a una cadena hexadecimal de dos caracteres en mayúsculas. Incluya esa hex de dos caracteres después del '*' cuando envíe el SMS.
- Muchas herramientas del proveedor o scripts calculan esto automáticamente; si arma un SMS manual, calcule el checksum exactamente como se describe.

Nota sobre el formato
- El HTML del fabricante hace referencia a una cadena de formato y a un formato de comando SMS. Al usar comandos SMS, asegúrese de que todo el comando esté formado exactamente y de que el dispositivo soporte programación por SMS en su versión de firmware.

## Notas de configuración

- El ejemplo público del TR-520 emplea configuración por SMS; confirme que su firmware y la SIM admiten este método antes de depender únicamente de él.
- Las revisiones de firmware o las variantes de hardware pueden cambiar la sintaxis requerida de los comandos o el comportamiento del checksum; siempre verifique los comandos con la documentación del fabricante para la revisión de su dispositivo.
- Seleccione UDP o TCP según los requisitos de la instalación; Plaspy acepta ambos en el puerto 8888 y se encargará de la detección de protocolo automáticamente.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles; solo debe aplicar el host del servidor (d.plaspy.com o la IP 54.85.159.138) y los ajustes específicos del dispositivo.
- Cuando esté disponible, use la app móvil del fabricante o la herramienta oficial de configuración para reducir errores manuales en los comandos y para simplificar el cálculo del checksum.

## Por qué usar Plaspy con esta configuración

Configurar el TR-520 para reportar a Plaspy ofrece una manera directa de recopilar datos de ubicación y movimiento de larga duración y bajo consumo desde activos, vehículos o animales en campo. Con la conectividad LTE‑M y NB‑IoT del TR-520 y el endpoint de servidor de Plaspy, puede consolidar telemetría, alertas de eventos y estado del equipo en una sola plataforma para monitoreo y operaciones.

Para conocer más sobre Plaspy y cómo se integra con rastreadores como el GlobalSat TR-520 visite https://www.plaspy.com. Para obtener las instrucciones específicas más recientes, notas de firmware y comandos oficiales, verifique la información actual en el sitio del fabricante https://www.globalsat.com.tw/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
