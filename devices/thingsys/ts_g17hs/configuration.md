---
slug: /thingsys/ts_g17hs/configuration
id: ts_g17hs-configuration
sidebar_label: Configuration
title: ThingSys - TS-G17Hs Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for ThingSys TS G17Hs with Plaspy server settings and SMS configuration commands
keywords:
  - ThingSys TS G17Hs configuration
  - ThingSys TS G17Hs setup
  - TS G17Hs Plaspy configuration
  - GPS tracker server configuration
  - vehicle tracker setup guide
  - Plaspy server settings
  - TS G17Hs SMS commands
  - fleet tracking configuration
  - GT06 CRX3 protocol tracker
  - TS G17Hs GPRS setup
---

# ThingSys - TS-G17Hs Configuration

This page documents the public configuration context for using the ThingSys TS-G17Hs tracker with Plaspy. It collects the practical server settings and example SMS commands that are commonly used to point the device to Plaspy, and explains what to check before you register the device in your Plaspy account. Use this guide as a practical reference for integration preparation; always cross-check with manufacturer documentation for device firmware specific behavior.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary with firmware version, hardware revision, installation type, and vendor configuration tools. The TS-G17Hs supports SMS configuration and GPRS reporting; example SMS commands and the device default password are included below to help you configure the tracker for Plaspy.

## Configuration Overview

The goal of configuring the TS-G17Hs for Plaspy is to prepare the device to send GPRS or SMS reports to the shared Plaspy server so the device appears in the platform and transmits location plus vehicle telemetry reliably. Typical setup configures APN, server endpoint, transport, and any immediate device calibration needed for installation.

- Set the mobile operator APN and optional APN credentials so GPRS can connect.
- Point the device to the Plaspy server domain or IP and the shared port used by Plaspy.
- Choose transport mode (UDP or TCP) if the device requires an explicit selection.
- Validate connectivity and protocol detection so Plaspy receives the first reports.
- Save configuration and restart or cycle power to apply settings before final validation.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the transport the device requires
- Plaspy automatically detects the tracker protocol when the device reports
- Note that all devices in Plaspy use the same port so you should specify port 8888 for this device

## Typical Requirements Before Setup

- A powered and reachable TS-G17Hs unit with access to its SMS configuration number or manufacturer tool
- A valid cellular SIM with data provisioning and correct APN information for the mobile operator
- A phone capable of sending SMS commands to the tracker or access to the official ThingSys configuration tool when available
- Knowledge of the device default password if SMS authentication is required (the public sample default password shown here is 123456)
- Basic installation checks such as secured power, antenna placement, and physical ignition wiring where telemetry like ACC is required

## How This Tracker Connects to Plaspy

When configured, the TS-G17Hs reports location and telemetry to the shared Plaspy server endpoint on the Plaspy port so the platform can ingest and display live and historical data. Plaspy interprets supported protocols and exposes ignition, SOS, and buffered blind area records through its fleet management interface.

- The device sends GPRS tracking packets to d.plaspy.com or 54.85.159.138 on port 8888
- Plaspy accepts UDP or TCP transport and will detect the tracker protocol automatically
- If configured, SMS can be used for fallback polling or for switching the device protocol mode
- Blind-area buffered messages are uploaded once GPRS connectivity is restored, preserving event history
- Device telemetry such as ignition state and SOS can be forwarded to Plaspy for alerts and operational workflows

## Common Configuration Workflow

1. Access the official ThingSys configuration method, typically SMS commands or the manufacturer configuration tool, and confirm the device phone number or connection method.
2. Set the operator APN and optional APN username and password using the device SMS commands or tool.
3. Enter the Plaspy server endpoint by specifying either d.plaspy.com or the IP 54.85.159.138.
4. Set the port to 8888 for Plaspy and, if required by the device, choose UDP or TCP as the transport.
5. Apply or save the configuration and, if the device requires it, restart the tracker or cycle power.
6. Validate that the device reports to Plaspy by checking for the first location update or by using the device verification command.
7. If the device does not report, re-check APN details, SMS command confirmation responses, and manufacturer troubleshooting notes.

## Example Configuration Commands

The TS-G17Hs can be configured using SMS messages. The sample commands below are taken from public manufacturer examples. The device password used in these examples is 123456 and is the default shown in the public content. Replace placeholders with operator-specific values where indicated.

- Optional initial factory reset (use only when a full reset is needed)
```text
FORMAT
```

- Set the operator APN (replace {{apn}} with your operator APN)
```text
apn123456 {{apn}}
```

- Set the APN username (replace {{apnu}} with the APN username if required)
```text
apnuser123456 {{apnu}}
```

- Set the APN password (replace {{apnp}} with the APN password if required)
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to the Plaspy IP and port (public example uses the IP)
```text
ip54.85.159.138 8888
```

Notes for commands
- If you prefer to use the Plaspy domain, configure the device to use d.plaspy.com where the device firmware supports domain names rather than an IP address.
- Placeholders {{apn}}, {{apnu}}, and {{apnp}} should be replaced with your mobile operator values when sending SMS commands.
- After sending each SMS command the device typically replies with a confirmation message; monitor the device SMS responses to confirm success.

- Verification command to check current settings
```text
CXZT
```

Send SMS commands to the SIM number installed in the TS-G17Hs. If SMS setup is not available for your unit or firmware, use the ThingSys configuration tool or follow manufacturer guidance.

## Configuration Notes

- Firmware versions and hardware revisions may change supported command syntax or behavior; the SMS examples here are public samples and may differ by firmware.
- The device supports both UDP and TCP reporting; choose the transport your deployment prefers. Plaspy will detect the tracker protocol automatically once reports arrive.
- SMS based configuration is commonly supported for the TS-G17Hs; use SMS when remote access is required or when installer tools are unavailable.
- Keep the default password information in mind; change the password if recommended by your security policy after initial setup.
- When setting the server, you can use the Plaspy domain d.plaspy.com or the IP 54.85.159.138. Always specify port 8888 since Plaspy uses the same port for all devices.

## Why Use Plaspy with This Configuration

Using the TS-G17Hs with Plaspy provides a straightforward path to capture vehicle location, ignition status, SOS alerts, and buffered blind-area records in a single fleet management platform. The shared Plaspy server settings simplify onboarding across many devices and make rollouts consistent for mixed fleets.

To learn more about Plaspy and see platform features that complement TS-G17Hs telemetry, visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and official instructions, verify details on the ThingSys website https://www.thingsys.com/ since manufacturer setup methods and firmware behavior can change over time.
