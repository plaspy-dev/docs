---
slug: /teltonika/ftc921/configuration
id: ftc921-configuration
sidebar_label: Configuration
title: Teltonika - FTC921 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Teltonika FTC921 for use with Plaspy including server settings, example commands, and verification guidance for fleet tracking
keywords:
  - Teltonika FTC921 configuration
  - Teltonika FTC921 setup
  - FTC921 server configuration
  - FTC921 Plaspy integration
  - Plaspy device setup
  - GPS tracker configuration guide
  - fleet tracking setup
  - e mobility tracker configuration
  - vehicle tracker Teltonika
  - Teltonika configuration commands
---

# Teltonika - FTC921 Configuration

This page describes the public configuration context for using the Teltonika FTC921 with Plaspy. It collects the practical server settings and example commands you can use to point an FTC921 device at Plaspy for real time tracking and telemetry ingestion. The content is intended for fleet integrators and technicians preparing devices for Plaspy compatibility.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when the device connects. Exact manufacturer-side setup steps can vary depending on device firmware, hardware revision, installation type, and the Teltonika configuration tool or SMS command workflow you choose. Always confirm device-specific parameter meanings with Teltonika documentation when needed.

## Configuration Overview

The goal of the configuration process is to prepare an FTC921 so it reliably communicates with Plaspy and appears in your Plaspy fleet view. This includes setting the device APN and server target, selecting a transport where required, and validating connectivity so the tracker reports position and telemetry to Plaspy.

- Configure the device APN and network credentials so the FTC921 has cellular connectivity.
- Point the device server settings to Plaspy so TCP or UDP sessions reach the platform.
- Select UDP or TCP transport on port 8888 if the device requires an explicit transport selection.
- Save or apply the configuration and restart the device when necessary to begin reporting.
- Verify the tracker is visible in Plaspy and that location and telemetry arrive as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when devices connect

Plaspy uses the same port for all supported devices and will detect the protocol automatically, so these values are consistent across Plaspy integrations.

## Typical Requirements Before Setup

- Device power and physical installation completed so the tracker can boot and register on the cellular network.
- An activated SIM card and correct APN settings for the mobile network you will use.
- Access to Teltonika configuration methods supported by the FTC921 such as SMS commands, FOTA WEB, or TCT remote tools.
- The public Plaspy server details (d.plaspy.com or 54.85.159.138 and port 8888) available when entering server settings.
- A plan to choose UDP or TCP transport if your workflow or Teltonika tool requires an explicit selection.
- Ability to restart the device after applying configuration to ensure settings are applied.

## How This Tracker Connects to Plaspy

The FTC921 is configured to report location and device telemetry to the shared Plaspy server endpoint and port so Plaspy can ingest and display device activity for your fleet. Once configured, the tracker will open a session to Plaspy and send periodic updates and events according to its internal reporting rules.

- The device sends GNSS coordinates and telemetry to the Plaspy server at d.plaspy.com on port 8888.
- Transport can use either UDP or TCP depending on how the device is configured and network conditions.
- Plaspy automatically detects the tracker protocol when a connection is made, so the same port is used for all supported devices.
- Reporting enables real time location visibility, event alerts, and historical tracking in Plaspy.
- Verification confirms the device is sending packets to d.plaspy.com or 54.85.159.138 and that the data appears in Plaspy.

## Common Configuration Workflow

1. Access the official Teltonika configuration method for the FTC921 such as SMS commands, TCT, or FOTA WEB.
2. Enter the Plaspy server as d.plaspy.com or, where appropriate, use the server IP 54.85.159.138.
3. Set the device port to 8888.
4. Choose UDP or TCP transport if the device requires you to explicitly select a transport.
5. Configure APN and any required network credentials for the device SIM.
6. Apply or save the configuration in the Teltonika tool or send the SMS command to the device.
7. Restart the device if the configuration method or firmware requires a reboot to apply changes.
8. Validate that the FTC921 reports to Plaspy by checking connectivity and device activity in the Plaspy platform.

If you use the SMS approach, be sure to send commands from a phone number the device accepts for remote configuration.

## Example Configuration Commands

The public Teltonika configuration example below shows a single command approach that sets APN parameters and the Plaspy server. This appears commonly as an SMS-style configuration command for Teltonika devices.

- To set APN, APN username, APN password, server domain, and port with the Teltonika setparam command:

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Notes on the placeholders
  - {{apn}} = your mobile network APN string
  - {{apnu}} = APN username if required by the operator
  - {{apnp}} = APN password if required by the operator

This command sets the device to use d.plaspy.com and port 8888. The numeric parameter IDs correspond to Teltonika device parameters; consult Teltonika documentation for full parameter mapping and the meaning of other IDs such as 2006. If you prefer to use the Plaspy server IP instead of the domain in other configuration tools, you can substitute 54.85.159.138 where the device UI allows entering an IP address.

## Configuration Notes

- Teltonika parameter IDs and command formats can vary by firmware version and device family; always confirm parameter mappings for FTC921 firmware before sending commands.
- The FTC921 supports Teltonika remote management tools (FOTA WEB and TCT) in addition to SMS configuration; choose the method that fits your deployment scale and security needs.
- Select TCP or UDP based on network reliability and operator behavior; UDP can be lighter but TCP provides session reliability in some networks.
- Because Plaspy uses the same port for all devices and automatically detects protocol, ensure the device is pointed at d.plaspy.com or the Plaspy server IP and that port 8888 is open on any intermediate firewalls.
- If you use SMS configuration, confirm the device accepts SMS commands from your sending number and that SMS configuration is enabled in the device security settings.

## Why Use Plaspy with This Configuration

Using the FTC921 with Plaspy gives organizations consolidated visibility into vehicle location, power status, and device health for fleets focused on e‑mobility and anti‑theft protection. With the shared Plaspy endpoint and automatic protocol detection, integrating FTC921 devices is straightforward once APN and server settings are applied.

Learn more about Plaspy and how it supports fleet tracking and device telemetry at https://www.plaspy.com. For the latest device parameter definitions, firmware behavior, and manufacturer configuration guidance, verify details with Teltonika on their official site https://www.teltonika-gps.com/ as device setup methods and firmware behavior may change over time.
