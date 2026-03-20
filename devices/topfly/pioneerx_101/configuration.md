---
slug: /topfly/pioneerx_101/configuration
id: pioneerx_101-configuration
sidebar_label: Configuration
title: TopFly - PioneerX 101 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for TopFly PioneerX 101 and Plaspy compatibility using shared server settings and SMS commands
keywords:
  - TopFly PioneerX 101 configuration
  - TopFly PioneerX 101 setup
  - PioneerX 101 Plaspy setup
  - TopFly GPS tracker configuration
  - Plaspy tracker configuration
  - vehicle tracking setup TopFly
  - PioneerX 101 server configuration
  - GPS tracker SMS setup TopFly
  - fleet management tracker configuration
  - PioneerX 101 APN configuration
---

# TopFly - PioneerX 101 Configuration

This page documents the public configuration context for using the TopFly PioneerX 101 GPS tracker with Plaspy. It summarizes the practical server settings and example commands that integrators and installers commonly use to point the device at Plaspy, and it highlights what you should confirm on the device and network side before attempting integration.

Plaspy uses shared server settings for supported devices and automatically detects the tracker protocol. Exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools; this page uses the publicly available SMS command sequence where present and explains how those commands map to the Plaspy server endpoint and port.

## Configuration Overview

Configuring the PioneerX 101 for Plaspy prepares the device to transmit location, telemetry, and events to a single Plaspy endpoint so that the device becomes visible and manageable from the Plaspy platform. The public configuration flow often uses the device's SMS command interface or manufacturer configuration tools to set APN, server address, transport, and reporting interval.

- Point the device to the Plaspy server endpoint so it reports to the correct backend.
- Configure APN and network settings so the device can join the cellular data network.
- Set the transport and port (UDP or TCP on port 8888) to match Plaspy's shared settings.
- Configure reporting interval and buffering so position updates meet your operational needs.
- Validate connectivity and confirm the device appears in Plaspy after configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: supported using UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered and accessible PioneerX 101 unit with a working SIM card and active data plan if using GPRS/LTE data reporting. SMS-based configuration also requires the ability to send SMS messages to the device.
- The device default password for SMS configuration is 0000 when following the public example commands; confirm or update this as needed per your installation policy.
- APN details for the SIM operator (APN, APN username, APN password) to configure data connectivity.
- Access to the manufacturer's configuration method (SMS commands, USB/Type‑C tool, or web/desktop configuration utility) for the PioneerX 101.
- A way to monitor device connectivity and confirm that the tracker is reporting to Plaspy (console logs, device LEDs, or verification in Plaspy).

## How This Tracker Connects to Plaspy

When configured for Plaspy, the PioneerX 101 transmits location updates and device events to the shared Plaspy server endpoint and port. Plaspy receives reports regardless of which supported protocol the tracker uses because the platform auto detects the device protocol and accepts connections on the same port for all devices.

- The device is configured to report to d.plaspy.com (or the equivalent IP 54.85.159.138) on port 8888.
- Transport may be selected as UDP or TCP; the device sends telemetry using the chosen transport to port 8888.
- Location updates, status reports, and alarm events are forwarded to Plaspy for live monitoring and historical logs.
- Plaspy’s automatic protocol detection identifies the tracker protocol so no separate protocol selection on the server is required.
- After configuration the device should become visible in the Plaspy platform when it successfully registers and sends its first packets.

## Common Configuration Workflow

1. Access the official TopFly configuration method for the PioneerX 101 (SMS commands, USB Type‑C configuration tool, or the manufacturer's software).
2. Set the APN using the operator APN values so the device can use cellular data.
3. Enter the Plaspy server by entering d.plaspy.com or the IP 54.85.159.138 as the device server address.
4. Set the server port to 8888; remember Plaspy uses the same port for all supported devices.
5. Choose the transport protocol (UDP or TCP) on the device if it requires explicit selection.
6. Apply or save the configuration and restart the device if required by the device firmware.
7. Validate that the device reports to Plaspy by confirming a successful connection and first location/heartbeat in your Plaspy deployment.

## Example Configuration Commands

The PioneerX 101 can be configured via SMS commands. The following public example sequence uses the device SMS interface and the device default password 0000. Preserve placeholders when substituting your operator APN details.

1. Set the time zone to UTC+0
```text
GMT,0000,0#
```

2. Set the operator APN (replace placeholders with your operator values)
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}}   = APN name supplied by your mobile operator  
- {{apnu}}  = APN username if required (leave blank if not used)  
- {{apnp}}  = APN password if required (leave blank if not used)

3. Set the GPRS server to Plaspy (IP and port)
```text
IP,0000,54.85.159.138 8888#
```
Alternatively you may be able to use the server host name:
```text
IP,0000,d.plaspy.com 8888#
```

4. Set the periodic update interval to 60 seconds
```text
TIMER,0000,60:60:0:0#
```

Notes on these commands:
- The example SMS commands use the device password 0000 as shown in the public configuration content. If your device password has been changed, replace 0000 with the device password.
- Send each command as a separate SMS message to the device phone number. Maintain the command order if specified by the manufacturer.
- If your installation uses a configuration tool instead of SMS, apply the equivalent fields: APN, server address (d.plaspy.com or 54.85.159.138), port 8888, transport (UDP/TCP), and update interval.

## Configuration Notes

- Firmware and tool differences: command formats and available options may vary across firmware versions and vendor tools; verify the exact syntax for your device firmware.
- SMS versus software configuration: the PioneerX 101 supports SMS configuration in the public example; if you use the manufacturer's USB or desktop tool, the same server, port, transport, and APN values should be applied.
- TCP versus UDP: choose UDP or TCP based on your integration requirements; both transports are supported for Plaspy on port 8888 and Plaspy will detect the protocol automatically.
- APN placeholders: replace {{apn}}, {{apnu}}, and {{apnp}} with your operator values; if username or password are not required, leave those fields empty per your operator instructions.
- Default password: the public example uses the default SMS password 0000; change this password after initial setup if security policy requires it.

## Why Use Plaspy with This Configuration

Using the PioneerX 101 with Plaspy provides a straightforward path to collect frequent position updates and device events into a single fleet or asset management platform. By configuring the device to report to d.plaspy.com (or 54.85.159.138) on port 8888 and choosing UDP or TCP as appropriate, you enable real-time visibility, event reporting, and the ability to act on alerts from Plaspy without per-device server variation.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer guidance verify current information at the TopFly website https://www.topflytech.com/.
