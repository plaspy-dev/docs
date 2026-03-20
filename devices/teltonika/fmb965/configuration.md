---
slug: /teltonika/fmb965/configuration
id: fmb965-configuration
sidebar_label: Configuration
title: Teltonika - FMB965 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configure Teltonika FMB965 for use with Plaspy server settings and example commands
keywords:
  - Teltonika FMB965 configuration
  - FMB965 setup guide
  - Teltonika FMB965 Plaspy
  - FMB965 server configuration
  - Teltonika tracker configuration
  - GPS tracker FMB965 setup
  - Plaspy tracker integration
  - Fleet tracking FMB965
  - FMB965 BLE sensor setup
  - Teltonika device configuration
---

# Teltonika - FMB965 Configuration

This page documents the public configuration context for using the Teltonika FMB965 tracker with Plaspy. It focuses on the shared server settings Plaspy requires, practical steps you can follow to point an FMB965 at the Plaspy endpoint, and the example command syntax provided in vendor materials for basic parameter setup.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary with firmware versions, hardware revisions, installation type, and the configuration tools used by installers. Use the guidance here together with Teltonika documentation and tools when preparing devices for Plaspy integration.

## Configuration Overview

The purpose of the configuration process is to prepare the FMB965 so it can reliably communicate location and telemetry to Plaspy, be visible in the Plaspy platform, and report events for monitoring and alerts.

- Configure the device network and server parameters to point to Plaspy
- Ensure the device has mobile connectivity and correct APN settings where required
- Validate transport (UDP or TCP) and that the device uses the shared Plaspy port
- Apply and save settings, then verify the tracker appears in Plaspy
- Use manufacturer tools or SMS commands where supported to perform bulk or remote configuration

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

All devices in Plaspy use the same port and the platform will detect the correct protocol for connected trackers.

## Typical Requirements Before Setup

- A powered FMB965 with sufficient battery or mains connection for configuration
- Mobile connectivity enabled and a SIM with data if using cellular networks over 2G
- Access to Teltonika configuration tools or the device SMS command interface as provided by the manufacturer
- Knowledge of the APN, APN username, and APN password for the SIM network if required
- A workstation or device to send configuration commands or to use Teltonika software for mass provisioning
- Confirmation of the device firmware version and documentation for any command syntax differences

## How This Tracker Connects to Plaspy

The FMB965 is configured to report position and events to the shared Plaspy server endpoint and port. Once configured, the tracker sends periodic position updates and event notifications to Plaspy where they become available for live mapping, history, and alerting.

- The device is pointed to the Plaspy server at d.plaspy.com (or the provided server IP)
- Communications use port 8888 for all Plaspy connected devices
- Transport can be set to UDP or TCP depending on device configuration; Plaspy accepts both
- Plaspy automatically detects the tracker protocol on connection and ingests location reports and events
- After successful configuration the device will appear in Plaspy dashboards for monitoring and historical playback

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software (Teltonika configuration tools, FOTA WEB, or SMS where supported).
2. Enter the Plaspy server endpoint either as the domain d.plaspy.com or the IP 54.85.159.138 in the server field.
3. Set the server port to 8888 (Plaspy uses the same port for all supported devices).
4. Choose UDP or TCP transport if the device requires an explicit transport selection.
5. Configure APN and authentication values if the SIM requires them and include any other required device parameters.
6. Apply or save the configuration and, if required, restart the device to apply changes.
7. Validate that the device reports to Plaspy by observing the tracker appearing and sending updates on the Plaspy platform.

## Example Configuration Commands

The following example is extracted from Teltonika public configuration content and shows a compact command for setting basic parameters including APN placeholders and the Plaspy server. Preserve the placeholders when you adapt the command for your deployment.

- Example command (single line):

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on placeholders and use:
- [apn] is the cellular network APN name required by the SIM
- [apnu] is the APN username if the network requires one; leave blank if not used
- [apnp] is the APN password if required by the operator
- The command sets the Plaspy server domain d.plaspy.com and port 8888 as shown
- Depending on the Teltonika tool or SMS interface you use, send this command using the recommended format for that method
- Adjust transport or additional parameters according to Teltonika documentation or your provisioning plan

## Configuration Notes

- Manufacturer tools such as Teltonika configuration software or SMS interfaces may accept the same command syntax in different wrappers; follow official Teltonika instructions for the method you choose.
- Firmware variations may change exact parameter numbers or required syntax; always verify the parameter mapping for your device firmware.
- Choose UDP or TCP based on network conditions and installer preference; Plaspy accepts both and will detect the protocol automatically.
- The example command includes APN placeholders; populate them with the correct values for your mobile operator before applying.
- For bulk deployments consider Teltonika remote management options like FOTA WEB together with the presented settings for scalable provisioning.

## Why Use Plaspy with This Configuration

Configuring the FMB965 to report to Plaspy gives organizations consistent visibility into asset location, movement, and configured events using a shared, well-known server endpoint and port. The combination of a compact, low-power tracker with Plaspy's automatic protocol detection and unified port simplifies integration and reduces per-device configuration variance.

To learn more about Plaspy, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware details, and parameter mappings verify the manufacturer documentation at https://www.teltonika-gps.com/ as device firmware and setup procedures can change over time.
