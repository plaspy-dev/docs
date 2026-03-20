---
slug: /thingsys/j16/configuration
id: j16-configuration
sidebar_label: Configuration
title: ThingSys - J16 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect ThingSys J16 GPS tracker to Plaspy using shared server settings and SMS or GPRS setup methods
keywords:
  - ThingSys J16 configuration
  - ThingSys J16 setup
  - J16 Plaspy configuration
  - J16 GPS tracker setup
  - Plaspy server configuration
  - GPS tracker SMS commands
  - J16 GPRS configuration
  - vehicle tracker configuration
  - GT06 CRX3 protocol setup
  - fleet tracking setup
---

# ThingSys - J16 Configuration

This page documents the public configuration context for using the ThingSys J16 tracker with Plaspy. It collects the practical, nonproprietary information needed to point a J16 device at the Plaspy cloud endpoint, explains common setup steps you may use with ThingSys tools or SMS commands, and highlights what to check before the device appears in Plaspy. Use this as a concise reference for integrating the J16 into a Plaspy fleet.

Plaspy uses shared server settings across supported trackers and automatically detects the device protocol, while manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The J16 supports TCP/IP GPRS tracking and SMS polling and defaults to GT06/CRX3 protocol families, so the guidance below focuses on applying the Plaspy server values and validating connectivity rather than exhaustive device internals.

## Configuration Overview

The goal of configuring a J16 for Plaspy is to prepare the device to reliably send its location and telemetry to the Plaspy servers, validate connectivity, and enable the tracker to appear in your Plaspy account. Depending on your installation, configuration happens via the ThingSys official tools or by sending SMS commands as supported by the device firmware.

- Set or confirm the APN so the J16 can attach to the cellular network for GPRS data.
- Configure the tracker to report to the Plaspy server endpoint and the shared port used by Plaspy.
- Choose and verify transport settings (UDP or TCP) if the tracker requires a transport selection.
- Validate the device on the Plaspy platform to confirm the tracker is sending packets and being auto detected.
- Keep a record of any SMS commands or software changes and the default device password used during setup.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the ThingSys J16:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Note that Plaspy uses the same port for all supported devices and will attempt protocol detection automatically once it receives tracker packets.

## Typical Requirements Before Setup

- A powered J16 device with accessible wiring and a charged internal battery if used for offline testing.
- An active SIM card with a data plan and the correct APN information for the mobile operator.
- Access to the ThingSys configuration method you will use such as the manufacturer's SMS command flow or official configuration software.
- Knowledge of the device password (sample default password 123456 as shown in the public configuration commands).
- A phone capable of sending SMS to the device or access to the manufacturer's software and a serial/USB connection if applicable.
- A Plaspy account to verify the device appears and reports correctly after configuration.

## How This Tracker Connects to Plaspy

When configured, the J16 transmits positional and telemetry messages to Plaspy over GPRS using TCP/IP or over SMS where supported. Plaspy receives those packets at its shared server endpoint and port and applies automatic protocol detection so that GT06, CRX3, and other supported profiles are interpreted correctly.

- The device sends location and telemetry packets to the Plaspy server endpoint and port.
- Plaspy receives the packets on the shared port and automatically identifies the tracker protocol.
- Telemetry and event messages become visible in the Plaspy dashboard for monitoring and alerting.
- The J16 can buffer messages when out of coverage and forward stored messages to Plaspy when connectivity returns.
- Plaspy can correlate the J16 feed with other data sources for richer fleet insights.

## Common Configuration Workflow

1. Access the official ThingSys configuration method you prefer such as SMS setup or the ThingSys configuration tool and confirm the device password.
2. Configure the device to report to Plaspy by entering d.plaspy.com or the Plaspy server IP 54.85.159.138 as the server destination.
3. Set the port to 8888 in the tracker settings.
4. Choose UDP or TCP if the J16 firmware requires you to select a transport protocol.
5. Set the operator APN, and if required, APN username and APN password according to your SIM provider.
6. Apply or save the configuration on the device and restart the device if required by the firmware.
7. Validate that the device reports to Plaspy by checking for incoming packets and that Plaspy automatically detects the device protocol.

If you use SMS-based setup, follow ThingSys SMS command syntax and confirm changes with the device verification command described below.

## Example Configuration Commands

The ThingSys J16 supports SMS command configuration. The public sample commands below are taken from ThingSys public guidance. The sample uses the default device password 123456 where required. Send these SMS messages to the device number from an authorized phone as part of initial setup.

- Optional initial factory reset (use when device needs a clean state):
```
FORMAT
```
Label: Optional initial factory reset. Use only if you need to reset the device configuration to factory defaults.

- Set operator APN (replace {{apn}} with your mobile operator APN):
```
apn123456 {{apn}}
```

- Set APN username (replace {{apnu}} with your APN username if required):
```
apnuser123456 {{apnu}}
```

- Set APN password (replace {{apnp}} with your APN password if required):
```
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to the Plaspy server using the public IP and port:
```
ip54.85.159.138 8888
```

- Check current settings on the device:
```
CXZT
```

Notes on the commands above:
- The SMS syntax and command prefixes reflect ThingSys public examples. The strings {{apn}}, {{apnu}}, and {{apnp}} are placeholders you must replace with your operator APN and credentials.
- The example uses an IP based server command as provided by ThingSys public guidance. Some firmware versions accept a domain name instead of an IP; consult ThingSys documentation for the exact SMS syntax to use a domain such as d.plaspy.com if supported.
- The sample setup indicates a default device password of 123456. Include the password in SMS commands as required by your firmware and ThingSys instructions.

## Configuration Notes

- Firmware and tool differences: SMS command formats and configuration behaviors can vary between ThingSys firmware revisions and device variants J16A and J16B.
- Transport choice: The device may allow UDP or TCP; choose the transport required by your network and confirm packets arrive at Plaspy using port 8888.
- APN placeholders: Keep {{apn}}, {{apnu}}, and {{apnp}} placeholders in commands and replace them with operator-specific values when sending SMS.
- SMS versus software: If you have access to ThingSys configuration software, it can simplify multi-device setup. SMS commands are useful for remote or field installations.
- Verification: Use the provided verification command and check Plaspy to ensure the device packets are accepted and the protocol is auto detected.

## Why Use Plaspy with This Configuration

Configuring the J16 to report to Plaspy provides a reliable path to centralized vehicle visibility, event reporting, and historical data storage. The device's LTE CAT1 connectivity with 2G fallback, blind-area message buffering, and support for GT06/CRX3 protocols make it practical for mixed fleet deployments that need continuous monitoring and incident response.

To learn more about Plaspy and supported device integrations visit https://www.plaspy.com. For the latest ThingSys J16 device specific commands, firmware notes, and manufacturer guidance verify details at the ThingSys website https://www.thingsys.com/. Manufacturer specifications and setup methods can change over time so always confirm device behavior with the official ThingSys documentation.
