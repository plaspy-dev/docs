---
slug: /minifinder/rex/configuration
id: rex-configuration
sidebar_label: Configuration
title: MiniFinder - Rex Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar MiniFinder Rex con Plaspy, incluye ajustes de servidor, comandos SMS y pasos prácticos para conectar el rastreador
keywords:
  - Configuración MiniFinder Rex
  - Instalación MiniFinder Rex
  - MiniFinder Rex en Plaspy
  - Configuración rastreador GPS Rex
  - Configuración servidor Rex
  - Configuración rastreador Plaspy
  - Configuración rastreador MiniFinder
  - Configuración SMS Rex
  - Integración rastreador GPS Plaspy
  - Configuración plataforma Rex
---

# MiniFinder - Configuración de Rex

Esta página describe el contexto público de configuración para usar el rastreador MiniFinder Rex con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y los comandos de ejemplo disponibles públicamente para preparar Rex y que informe a Plaspy. Use esta guía para configurar la conectividad y verificar que el dispositivo aparezca en Plaspy una vez que esté correctamente apuntado a la plataforma.

Plaspy emplea un endpoint de servidor compartido y ajustes de red consistentes entre los dispositivos compatibles, y detecta automáticamente el protocolo del rastreador cuando los datos llegan al servidor. Los pasos específicos por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; siga las instrucciones del fabricante de Rex cuando difieran de esta orientación general.

## Resumen de la configuración

Configurar Rex para Plaspy se centra en preparar el dispositivo para que envíe datos de posición y estado al endpoint compartido de Plaspy y en validar que el dispositivo sea visible en la plataforma. Para Rex, los métodos públicos de configuración incluyen comandos por SMS que ajustan la zona horaria, el APN y la dirección del servidor GPRS para que el dispositivo pueda conectarse mediante datos móviles.

- Apunte el rastreador al dominio o IP del servidor de Plaspy para que la telemetría se encamine a la plataforma.
- Configure el APN del dispositivo para que el rastreador pueda usar datos celulares y alcanzar Plaspy.
- Asegúrese de que el transporte del dispositivo esté configurado en UDP o TCP y use el puerto 8888 según lo requiera el equipo.
- Valide que el dispositivo informe la posición y el estado a Plaspy y que aparezca en la plataforma.
- Use las herramientas de configuración del fabricante o los comandos SMS proporcionados por MiniFinder cuando estén disponibles para Rex.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado: configure UDP o TCP en el puerto 8888 según los requerimientos del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al servidor

Nota: Todos los dispositivos en Plaspy usan el mismo puerto 8888. Apuntar un rastreador a d.plaspy.com o a la IP del servidor en el puerto 8888 es la configuración pública esperada para la compatibilidad con Plaspy.

## Requisitos típicos antes de la configuración

- Un dispositivo MiniFinder Rex cargado y operativo con acceso al método de configuración del fabricante (SMS, app compañera o herramienta de configuración).
- Una SIM celular activa con capacidad de datos y SMS y el APN correcto del operador móvil.
- Acceso para enviar comandos SMS desde un teléfono o desde la herramienta del fabricante si Rex se configura por SMS.
- Conocimiento del APN del operador y de cualquier campo de usuario o contraseña de APN que requiera el proveedor móvil.
- Un entorno estable de trabajo o campo para verificar la recepción GNSS y la conectividad celular.
- Acceso administrativo a Plaspy para confirmar el registro del dispositivo y la visibilidad de la telemetría después de la configuración.

## Cómo se conecta este rastreador a Plaspy

MiniFinder Rex se configura para enviar datos de ubicación y estado a través de la red celular al endpoint compartido y al puerto de Plaspy. Una vez que el dispositivo esté apuntado a Plaspy y tenga datos celulares disponibles, Plaspy procesará los mensajes del dispositivo y determinará automáticamente el protocolo para que la telemetría se muestre en la plataforma.

- El rastreador se configura para reportar a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El transporte del dispositivo puede ajustarse a UDP o TCP en el puerto 8888 según las opciones de configuración del equipo.
- La ubicación, el estado de batería, el nivel de señal y las notificaciones de eventos compatibles se reenvían a Plaspy para el mapeo en tiempo real y las alertas.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los mensajes llegan al servidor, por lo que no es necesario seleccionar el protocolo por separado dentro de Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de MiniFinder para Rex (comandos SMS, app MiniFinder o herramienta de soporte) según lo descrito en la documentación del fabricante.
2. Configure el APN del dispositivo para que el rastreador pueda usar datos celulares y alcanzar Plaspy (use los valores de APN de su operador móvil).
3. Ingrese el servidor de Plaspy por nombre de host d.plaspy.com o por IP 54.85.159.138 según la interfaz de configuración del dispositivo.
4. Establezca el puerto del servidor en 8888; recuerde que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
5. Seleccione UDP o TCP en el puerto 8888 si el rastreador requiere una selección explícita del transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante requieren reinicio.
7. Valide que el dispositivo informe a Plaspy y aparezca en la plataforma con actualizaciones de ubicación y estado.

Si Rex admite configuración por SMS, enviar los comandos SMS del fabricante es un método frecuente para realizar estos pasos de forma remota. Siga el orden recomendado por el fabricante para obtener mejores resultados.

## Comandos de configuración de ejemplo

MiniFinder Rex admite configuración por SMS. Los comandos públicos de ejemplo para la configuración inicial (enviados como SMS individuales) son:

- Establecer la zona horaria a UTC 0
```
tz+00
```

- Establecer el APN del operador (reemplazar los marcadores con los valores de su operador)
```
S1,{{apn}}{{apnu_and_apnp_if_required}}
```
Explicación: Reemplace {{apn}} con el APN de su operador. Si su operador requiere usuario y contraseña, use los marcadores opcionales {{apnu}} y {{apnp}} cuando la sintaxis del comando lo soporte. El ejemplo muestra cómo se representan los campos del APN; consulte la guía del fabricante para el SMS formateado exacto si debe suministrarse usuario o contraseña.

- Establecer el servidor GPRS a Plaspy por IP y puerto
```
IP1,54.85.159.138,8888
```

Notas sobre los comandos anteriores:
- Envíe cada comando como un SMS separado al dispositivo Rex siguiendo el procedimiento SMS del fabricante.
- Respete el orden cuando el fabricante lo recomiende (zona horaria, APN, luego ajustes del servidor) para asegurar un funcionamiento correcto.
- La sintaxis del fabricante puede permitir especificar el servidor por nombre de host (d.plaspy.com) en lugar de la IP; use el método que soporte su firmware.

## Notas sobre la configuración

- Diferencias de firmware y herramientas: la sintaxis exacta del SMS y los campos disponibles pueden cambiar entre versiones de firmware y herramientas del fabricante; siempre verifique con la documentación más reciente de MiniFinder Rex.
- SMS versus configuración por software: Rex puede soportar configuración tanto por SMS como por app o PC; use el método recomendado para su firmware y flujo de instalación.
- Elección del transporte: elija UDP o TCP en el puerto 8888 según lo requiera su instalación; Plaspy acepta ambos y detecta automáticamente el protocolo a partir de los mensajes entrantes.
- Política de puerto único: Plaspy utiliza el puerto 8888 para todos los dispositivos compatibles, lo que simplifica la configuración entre distintos modelos.
- Marcadores de APN: conserve marcadores como {{apn}}, {{apnu}} y {{apnp}} al preparar comandos SMS; reemplácelos por los valores de su operador.

## Por qué usar Plaspy con esta configuración

Usar MiniFinder Rex con Plaspy ofrece visibilidad centralizada de los datos de rastreo, notificaciones de eventos y herramientas de coordinación de equipos que resultan útiles para responsables y organizaciones que requieren conciencia situacional en tiempo real. Apuntar Rex al endpoint compartido de Plaspy le permite ingerir ubicación, batería y actualizaciones de estado en los flujos de trabajo de mapeo e informes de Plaspy para monitorear dispositivos en tiempo real y revisar datos históricos.

To learn more about Plaspy and how it supports device integrations like MiniFinder Rex visit https://www.plaspy.com. For the most current device specific configuration methods and firmware details for MiniFinder Rex verify information on the manufacturer site https://minifinder.se/ since setup steps and command syntax can change with new firmware and revisions.
