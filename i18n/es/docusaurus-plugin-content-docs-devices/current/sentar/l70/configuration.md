---
slug: /sentar/l70/configuration
id: l70-configuration
sidebar_label: Configuration
title: Sentar - L70 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Sentar L70 con Plaspy, incluye ajustes de servidor y comandos SMS
keywords:
  - Sentar L70
  - configuración Sentar L70
  - configuración L70
  - Sentar L70 Plaspy
  - configuración rastreador Sentar
  - configuración servidor L70
  - guía configuración L70
  - integración rastreador Sentar
  - configuración rastreador GPS
  - rastreo vehicular L70
---

# Sentar - L70 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS Sentar L70 con la plataforma Plaspy. Resume los ajustes de servidor que Plaspy espera, los comandos SMS públicos habituales para el L70 y los pasos prácticos para preparar el dispositivo para que reporte ubicación y estado a Plaspy. Utilice esto como referencia técnica para la configuración básica y la verificación.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los comandos de ejemplo que se muestran a continuación reflejan comandos SMS públicos comúnmente usados para la configuración del Sentar L70; verifique los detalles con la documentación de Sentar o con las herramientas del proveedor para comportamientos específicos del equipo.

## Resumen de configuración

Esta configuración prepara el Sentar L70 para enviar su posición y eventos del dispositivo a Plaspy mediante la definición de parámetros de red, el endpoint del servidor y los intervalos de reporte. El L70 puede configurarse mediante comandos SMS como los ejemplos públicos abajo, o a través de cualquier herramienta del fabricante que soporte el equipo.

- Configure el APN y los parámetros GPRS del dispositivo para que el L70 pueda usar datos móviles y alcanzar el servidor de Plaspy.
- Apunte el rastreador al dominio o IP del servidor de Plaspy para que los paquetes se enruten a Plaspy para su procesamiento.
- Establezca el intervalo de carga o reporte para que el dispositivo envíe actualizaciones periódicas de ubicación a Plaspy.
- Valide la conectividad y la alcanzabilidad del servidor para que el rastreador aparezca en la plataforma Plaspy.
- Aplique y guarde la configuración y reinicie el dispositivo si es necesario para asegurar que la nueva configuración esté activa.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para el reporte y la conexión de rastreadores.
- IP del servidor 54.85.159.138 como endpoint alternativo al dominio.
- Puerto 8888 utilizado por Plaspy para todos los dispositivos compatibles.
- Soporte de transporte por UDP o TCP en el puerto 8888 según la capacidad del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador para que dispositivos con variantes de protocolo distintas puedan usarse sin selección manual de protocolo.
- Todos los dispositivos en Plaspy usan el mismo puerto para simplificar la configuración del dispositivo y el enrutamiento en la plataforma.

## Requisitos típicos antes de comenzar

- Un dispositivo Sentar L70 con energía y acceso físico para enviar comandos SMS o usar herramientas de configuración del fabricante.
- Una tarjeta SIM activa con datos móviles configurados para GPRS si piensa usar el dispositivo en la red celular.
- Conocimiento de la contraseña del dispositivo utilizada para la configuración por SMS (los ejemplos públicos usan 123456 como contraseña por defecto).
- Documentación del fabricante o acceso a las herramientas de configuración Sentar para opciones específicas del firmware.
- Un modo de verificar la conectividad de red desde el dispositivo al endpoint de Plaspy, por ejemplo comprobando respuestas de estado del dispositivo o la visibilidad en la plataforma.
- Si usa configuración por SMS, asegúrese de que el número desde el cual envía los mensajes esté autorizado por las opciones de seguridad del dispositivo.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el L70 usa su conexión de red móvil para enviar datos de ubicación y del dispositivo al endpoint del servidor Plaspy. Plaspy recibe los paquetes del dispositivo en el servidor y puerto compartidos y los asocia con la cuenta y el dispositivo correctos mediante el identificador del equipo y la detección del protocolo.

- El dispositivo se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Los datos pueden enviarse por UDP o TCP según la selección de transporte del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesaria una selección manual del protocolo en la plataforma.
- Las cargas periódicas se programan ajustando el intervalo de envío para que el dispositivo remita actualizaciones regulares a Plaspy.
- Tras una configuración exitosa, el dispositivo será visible en Plaspy para monitoreo y reporte de eventos.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Sentar o al software del fabricante, o prepárese para enviar comandos SMS al dispositivo según las instrucciones de Sentar.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Seleccione UDP o TCP en el dispositivo si se requiere elegir el transporte.
5. Configure el APN y cualquier parámetro del operador para que el dispositivo tenga conectividad GPRS si va a usar datos móviles.
6. Aplique o guarde la configuración y reinicie el dispositivo si el equipo o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando respuestas de estado y confirmando su visibilidad en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son ejemplos públicos proporcionados para la configuración del Sentar L70. Estos comandos usan la contraseña del dispositivo 123456 en los ejemplos. Si la contraseña del dispositivo ha sido cambiada, reemplace 123456 por la contraseña activa.

1. Restablecimiento de fábrica opcional (usar solo cuando sea necesario)
```
pw,123456,factory#
```

2. Establecer la zona horaria a UTC 0
```
pw,123456,lz,0,0#
```

3. Comprobar el IMSI para leer MCC y MNC
```
pw,123456,imsi#
```

4. Configurar el APN y parámetros del operador
Nota: {{apn}}, {{apnu}} y {{apnp}} son marcadores de posición. Reemplácelos con el APN, usuario y contraseña de su operador. El sufijo xxxyy representa MCC y MNC concatenados cuando sea requerido.
```
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```

5. Configurar el servidor GPRS con la IP y puerto de Plaspy
Este comando apunta el rastreador a la IP del servidor Plaspy y al puerto compartido 8888.
```
pw,123456.ip,54.85.159.138,8888#
```

6. Establecer el intervalo de carga a 300 segundos
```
pw123456,upload,300#
```

7. Verificar ajustes y estado
```
pw,123456,ts#
```

Preserve los marcadores de posición exactamente al componer el comando APN y reemplácelos con los valores de su operador. El comando de restablecimiento de fábrica es opcional y debe usarse solo si necesita restaurar la configuración por defecto.

## Notas de configuración

- Los ejemplos públicos del Sentar L70 muestran configuración por SMS; también pueden existir herramientas del fabricante o interfaces web según el vendedor y el firmware.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos y las opciones disponibles; confirme siempre con la documentación del fabricante.
- Elija UDP o TCP según las necesidades de su instalación y las recomendaciones del firmware del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- El dominio y la IP del servidor Plaspy son endpoints válidos; usar el dominio permite resolución DNS del operador mientras que la IP puede emplearse donde la resolución DNS esté restringida.
- Mantenga la contraseña del dispositivo segura y actualícela según sus prácticas de seguridad después de la configuración inicial si el dispositivo lo permite.

## ¿Por qué usar Plaspy con esta configuración?

Configurar el Sentar L70 para reportar a Plaspy ofrece un endpoint de servidor consistente y una plataforma que detecta automáticamente el protocolo del dispositivo, lo que facilita el alta de flotas y el monitoreo operativo. Para organizaciones que requieren visibilidad continua y reportes periódicos, usar el servidor y puerto compartidos de Plaspy reduce la complejidad de configuración por dispositivo.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar las instrucciones y comandos más recientes en el sitio oficial de Sentar http://www.sentarsmart.com/ antes de desplegar en producción.
