---
slug: /bofan/pt_80/configuration
id: pt_80-configuration
sidebar_label: Configuration
title: Bofan - PT-80 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Bofan PT-80 para usarlo con Plaspy mediante servidores compartidos y comandos SMS para reportes GPS fiables
keywords:
  - Configuración Bofan PT-80
  - Instalación Bofan PT-80
  - Bofan PT-80 Plaspy
  - Configuración tracker PT-80
  - Configuración SMS PT-80
  - Configuración servidor Plaspy
  - Configuración GPS Bofan
  - Instalación rastreador personal PT-80
  - Configuración GPRS PT-80
  - Integración rastreador Plaspy
---

# Bofan - PT-80 — Configuración

Esta página documenta el contexto público de configuración para usar el rastreador personal GPS Bofan PT-80 con Plaspy. Se centra en los detalles del servidor y del flujo de trabajo necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda enviar ubicaciones y eventos a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos desde el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando estén disponibles, aquí mostramos los comandos SMS del PT-80 que suelen aparecer en la documentación pública para preparar el dispositivo para Plaspy.

## Resumen de la configuración

Este proceso prepara el PT-80 para que se comunique con la plataforma Plaspy vía GPRS. Se trata principalmente de establecer el endpoint de servidor correcto, garantizar que el dispositivo tenga conectividad móvil y ajustes APN válidos, y verificar que el rastreador aparezca en Plaspy.

- Configure la dirección y el puerto del servidor para que el PT-80 envíe datos a Plaspy.
- Defina el APN y los parámetros de datos para que el rastreador pueda usar GPRS.
- Opcionalmente, use comandos SMS para aplicar ajustes directamente al equipo sin herramientas adicionales.
- Valide la conectividad y confirme que el rastreador aparezca en Plaspy para monitoreo en tiempo real.
- Ajuste el intervalo de actualización para balancear frecuencia de reporte y duración de batería.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Un dispositivo PT-80 cargado y funcionando con acceso a su método de configuración por SMS o a la herramienta del fabricante
- Una tarjeta SIM activa con datos habilitados y los detalles APN correctos para su operador móvil
- El IMEI del dispositivo u otro identificador para registrar o verificar el rastreador en Plaspy
- Conocimiento de la contraseña de comandos SMS del equipo si el dispositivo la requiere (el ejemplo público usa 000000 como contraseña por defecto)
- Acceso a la documentación del proveedor para notas específicas sobre firmware o revisiones

## Cómo se conecta este rastreador a Plaspy

El PT-80 se configura para enviar sus mensajes de ubicación y alarma al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda mostrar y procesar las actualizaciones del dispositivo. Normalmente el rastreador usa GPRS para abrir un socket hacia Plaspy y luego reporta la ubicación según el intervalo configurado.

- El dispositivo envía datos GPRS a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la selección del dispositivo
- Plaspy recibe la conexión entrante y detecta automáticamente el protocolo del rastreador
- Los mensajes de ubicación y eventos reportados se muestran en la plataforma Plaspy para monitoreo y alertas
- Los intervalos regulares de actualización y las alarmas por movimiento garantizan visibilidad operativa

## Flujo de configuración típico

1. Acceda al método oficial de configuración del fabricante o al software para el PT-80 (los comandos SMS son una forma común).
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o 54.85.159.138 en el ajuste de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto que Plaspy utiliza para todos los dispositivos.
4. Si el dispositivo solicita selección de transporte, elija UDP o TCP según las necesidades de su implementación.
5. Configure el APN y cualquier usuario o contraseña de APN necesarios para la tarjeta SIM y habilitar la conectividad GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo recomiendan.
7. Valide que el dispositivo reporte a Plaspy y que aparezca en la plataforma dentro de unos cuantos intervalos de actualización.

## Ejemplos de comandos de configuración

El PT-80 se suele configurar mediante comandos SMS. Los comandos de muestra públicos a continuación usan la contraseña por defecto del dispositivo 000000. Reemplace los marcadores de posición donde corresponda.

- Nota sobre la contraseña por defecto
  - Los comandos de ejemplo asumen que la contraseña del dispositivo es 000000, que es la que aparece en la muestra pública.

- Restauración de fábrica (paso inicial opcional)
  - Use solo si necesita restablecer el dispositivo a los valores de fábrica.

```
000000DFT
```

- Establecer identificador de 14 dígitos usado con Plaspy
  - Reemplace \<last14imei> con los últimos 14 dígitos del IMEI del dispositivo. Muchas instalaciones usan los últimos 14 dígitos del IMEI como identificador del equipo.

```
000000GID<last14imei>
```

- Configurar el APN para el operador móvil
  - Conserve los marcadores de posición para APN, usuario APN y contraseña APN cuando corresponda. Reemplace {{apn}} por el APN de su operador. Si necesita usuario o contraseña del APN incluya {{apnu}} y {{apnp}}.

```
000000APN{{apn}}{{,{{apnu}},{{apnp}}}}
```

  - Explicación: envíe 000000APN seguido de su APN. Si se requiere usuario y contraseña del APN inclúyalos después del APN separados por comas. Los marcadores {{apn}}, {{apnu}} y {{apnp}} deben reemplazarse por los valores de su operador.

- Configurar el servidor GPRS a Plaspy usando IP y puerto
  - Este comando configura el dispositivo para enviar datos a Plaspy. Plaspy también acepta el dominio d.plaspy.com pero en la muestra pública se usa la IP.

```
000000SVR54.85.159.138,8888
```

- Establecer intervalo de actualización a 1 minuto
  - El valor 60 establece el intervalo de reporte en segundos. Ajústelo según la duración de batería y la frecuencia deseada de reportes.

```
000000GTI60
```

Nota: Mantenga el orden cuando aplique estos comandos si realiza una configuración desde cero: opcionalmente resetee, establezca el identificador, configure el APN, ajuste el servidor y luego el intervalo.

## Notas de configuración

- La configuración vía SMS aparece en la documentación pública del PT-80; las herramientas o el software del fabricante pueden ofrecer flujos alternativos de configuración.
- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; confirme los comandos exactos con la documentación del proveedor antes de desplegar en cantidad.
- Elija UDP o TCP según las necesidades de su implementación; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la provisión de dispositivos en flotas mixtas.
- Verifique siempre el APN, el estado del plan de datos de la SIM y la cobertura de señal antes de concluir que un dispositivo está fuera de línea.

## Por qué usar Plaspy con esta configuración

Usar el PT-80 con Plaspy ofrece una vía sencilla para obtener visibilidad continua de ubicación y monitoreo de eventos. Al apuntar el rastreador al endpoint y puerto compartidos de Plaspy y confirmar que el dispositivo reporta correctamente, su organización obtiene acceso a una plataforma centralizada para seguimiento en tiempo real, alertas y supervisión operativa.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo y comportamiento de firmware más recientes, verifique los detalles con el fabricante en https://www.bofancloud.com/ ya que los pasos de instalación y la sintaxis de comandos pueden cambiar con el tiempo.
