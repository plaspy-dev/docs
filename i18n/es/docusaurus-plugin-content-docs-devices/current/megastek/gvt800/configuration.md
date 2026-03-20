---
slug: /megastek/gvt800/configuration
id: gvt800-configuration
sidebar_label: Configuration
title: Megastek - GVT800 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Megastek GVT800 con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración Megastek GVT800
  - Configuración GVT800 para Plaspy
  - Configuración rastreador GPS Megastek
  - Configuración servidor GVT800
  - Configuración rastreador Plaspy
  - Comandos SMS GVT800
  - Integración rastreador GPS Plaspy
  - Rastreo vehicular GVT800
  - Gestión de flota GVT800
  - Telemetría GVT800
---

# Megastek - Configuración GVT800

Esta página detalla el contexto público de configuración para usar el rastreador Megastek GVT800 con Plaspy. Reúne los ajustes prácticos del servidor, los requisitos habituales y los comandos SMS públicos del GVT800 que son relevantes al apuntar el dispositivo a Plaspy para rastreo y telemetría en tiempo real.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante para el GVT800 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la guía a continuación junto con la documentación oficial de Megastek y sus notas de firmware cuando realice la configuración.

## Resumen de la configuración

El proceso de configuración prepara el GVT800 para enviar posición, alarmas y datos I/O a Plaspy, de modo que los vehículos queden visibles y reporten eventos en la plataforma. Los comandos públicos para el GVT800 suelen usarse vía SMS para la provisión en campo, y el mismo endpoint y puerto de Plaspy se emplean para todos los dispositivos compatibles.

- Configure el rastreador para que informe al endpoint y puerto compartidos de Plaspy para que Plaspy pueda recibir ubicaciones y eventos.
- Establezca el APN del operador y el modo GPRS para que el GVT800 tenga conectividad celular de datos para subidas por UDP o TCP.
- Aplique un identificador de dispositivo o el IMEI como ID del rastreador para que Plaspy pueda asociar los mensajes entrantes con un registro de dispositivo.
- Valide la conectividad y el reporte observando la actividad del dispositivo en Plaspy después de aplicar la configuración.
- Use los comandos SMS del fabricante o el software del proveedor para persistir la configuración en la unidad.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para conexiones entrantes

## Requisitos típicos antes de la configuración

- Una unidad GVT800 alimentada y accesible con una tarjeta SIM funcional y servicio activo de datos o SMS compatible con el dispositivo
- El IMEI del dispositivo disponible para usar al establecer el identificador o verificar la identidad del equipo
- Un teléfono con capacidad SMS o una herramienta de configuración del proveedor para enviar comandos del fabricante cuando sea necesario
- Acceso a las instrucciones oficiales de Megastek o a la herramienta de configuración para detalles específicos del firmware del GVT800
- Conocimiento del APN correcto, usuario APN y contraseña APN del operador si se requiere datos móviles
- Una cuenta Plaspy o contacto administrativo para confirmar la provisión del dispositivo y su visibilidad una vez que el rastreador reporte

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GVT800 enviará actualizaciones de ubicación, alarmas y estado de entradas al endpoint y puerto compartido de Plaspy. Plaspy procesa esos mensajes y los asocia al registro del dispositivo para que los equipos de flota puedan monitorear posición en vivo, alarmas y telemetría.

- El rastreador se configura para reportar al endpoint de Plaspy en el puerto compartido, de modo que todas las subidas vayan al mismo destino
- Los mensajes del dispositivo se envían por datos celulares usando UDP o TCP según la configuración en el rastreador
- Las alarmas y eventos de entradas digitales se transmiten a Plaspy, donde pueden activar notificaciones y flujos de trabajo automatizados
- La conectividad exitosa hace que el dispositivo sea visible en Plaspy para seguimiento en tiempo real, reproducción de trayectos e informes
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere seleccionar el protocolo manualmente en la plataforma

## Flujo común de configuración

1. Acceda al método oficial de configuración del Megastek GVT800, como el conjunto de comandos SMS del proveedor o el software del fabricante documentado por Megastek.
2. Configure el identificador del dispositivo usando el IMEI para que el rastreador pueda emparejarse en Plaspy.
3. Ingrese la información del servidor Plaspy configurando la dirección del servidor en d.plaspy.com o 54.85.159.138 y establezca el puerto de destino en 8888.
4. Elija UDP o TCP en el dispositivo si la configuración del GVT800 requiere una selección explícita de transporte.
5. Configure el APN del operador y, si corresponde, el usuario y la contraseña del APN para que la unidad pueda usar datos móviles y alcanzar Plaspy.
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el equipo requiere reinicio para que los cambios tengan efecto.
7. Valide que el dispositivo reporte a Plaspy confirmando la recepción de datos y actualizaciones de ubicación en la interfaz de Plaspy o con su administrador de Plaspy.

## Comandos de configuración de ejemplo

El flujo público de comandos SMS de Megastek para la configuración inicial normalmente se realiza enviando SMS desde un teléfono al rastreador. Los comandos de muestra a continuación siguen los ejemplos públicos del fabricante. La configuración de ejemplo usa la contraseña predeterminada del dispositivo 000000 en cada comando. Reemplace los marcadores antes de enviar.

1. Establecer el ID del dispositivo al IMEI del equipo (reemplazar {{IMEI15}} con el IMEI de 15 dígitos)
```
M000000,22,{{IMEI15}}
```

2. Configurar el APN del operador. Reemplace {{apn}} con el APN de su operador. Opcionalmente incluya {{apnu}} y {{apnp}} para usuario y contraseña del APN si su operador los requiere.
```
M000000,23,{{apn}}
```
Forma opcional con usuario y contraseña del APN
```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

3. Establecer el intervalo de envío de posición a 60 segundos
```
M000000,25,60
```

4. Configurar el servidor GPRS a Plaspy. Este ejemplo público usa la IP y el puerto del servidor Plaspy según la guía de configuración
```
M000000,24,56 54.85.159.138,8888
```
Nota: Si su firmware acepta un nombre de dominio para los ajustes de servidor, ingrese d.plaspy.com en lugar de la IP donde esté soportado.

5. Habilitar modo GPRS (valor de ejemplo para activar GPRS)
```
M000000,21,2
```

Notas sobre los marcadores
- {{IMEI15}} debe reemplazarse con el IMEI del dispositivo compuesto por 15 dígitos.
- {{apn}} es el APN del operador móvil requerido para datos.
- {{apnu}} y {{apnp}} son campos opcionales de usuario y contraseña del APN y pueden omitirse si el operador no los exige.

## Notas de configuración

- El fabricante del GVT800 puede proporcionar configuración por SMS y herramientas del proveedor; la sintaxis exacta de los comandos y los números de índice pueden variar según firmware y región.
- Algunas revisiones de firmware aceptan nombres de dominio para la configuración del servidor, mientras que otras requieren la IP; verifique con su firmware y use d.plaspy.com o 54.85.159.138 según corresponda.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador, por lo que una configuración consistente del puerto es importante.
- Al usar aprovisionamiento por SMS, la contraseña predeterminada en los ejemplos públicos es 000000; cambie la contraseña del dispositivo después de la provisión si su despliegue requiere mayor seguridad.
- Elija UDP o TCP según la instalación y la fiabilidad del operador; ambos transportes son compatibles con Plaspy en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Apuntar el Megastek GVT800 a Plaspy ofrece a los operadores de flota visibilidad centralizada para rastreo en tiempo real, recepción de alarmas y monitoreo de telemetría en los vehículos. Usar el endpoint compartido de Plaspy y un puerto consistente simplifica despliegues a gran escala y ayuda a asegurar que los dispositivos comiencen a reportar rápidamente una vez aplicados el APN y la configuración del servidor.

Learn more about Plaspy on https://www.plaspy.com and review current device specifics, firmware notes, and detailed setup instructions on the Megastek website https://www.megastek.com/ to confirm the latest GVT800 configuration behavior and manufacturer guidance.
