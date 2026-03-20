---
slug: /suntech/st20u/configuration
id: st20u-configuration
sidebar_label: Configuration
title: Suntech - ST20U Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Suntech ST20U setup with Plaspy including server settings SMS commands and integration checklist
keywords:
  - Suntech ST20U configuration
  - Suntech ST20U setup
  - ST20U Plaspy configuration
  - Suntech GPS tracker configuration
  - Suntech ST20U server settings
  - ST20U SMS configuration
  - fleet tracking ST20U
  - vehicle telemetry ST20U
  - Plaspy tracker setup
  - Plaspy server configuration
---

# Suntech - ST20U Configuration

This page provides the public configuration context for using the Suntech ST20U with Plaspy. It explains the practical, public-facing steps required to point ST20U-equipped installations and their Plaspy-capable hosts to the Plaspy server endpoint, and it documents the SMS-based commands provided by the device vendor for APN and reporting setup where applicable.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by device firmware, hardware revision, installation type, and vendor tools. The ST20U is typically used as a telemetry bridge and is configured at the host or via SMS commands to forward telemetry into a GNSS-enabled host or Plaspy-capable gateway such as ST4305 or ST8300.

## Configuration Overview

The goal of configuration is to prepare the ST20U and its host so that vehicle telemetry and GNSS location from the host are visible in Plaspy. For ST20U deployments this often means using manufacturer-provided SMS or host configuration tools to set the operator APN, the GPRS server fields, and the reporting interval so the host and tracker upload telemetry to Plaspy.

- Configure APN and GPRS/server fields so the host or tracker can initiate data sessions to Plaspy.
- Set the device identifier correctly using the IMEI derived device ID required by the manufacturer SMS commands.
- Point the host or tracker to the Plaspy server endpoint and confirm the chosen transport (UDP or TCP).
- Configure reporting interval to the desired frequency so Plaspy receives timely updates.
- Validate the device is visible in Plaspy and that telemetry (VIN, speed, odometer, RPM, fuel, etc.) arrives when using a GNSS-enabled host.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered ST20U installed and connected to a Plaspy-capable GNSS host or gateway (for example ST4305 or ST8300) so that location and telemetry can be combined.
- A working SIM card with data or SMS capability and the correct operator APN details for the mobile network.
- Access to the manufacturer configuration method supported by the device or host (SMS commands or vendor configuration tool).
- The device IMEI available so you can derive the device ID required by SMS commands.
- A Plaspy account and a way to check device connectivity in the Plaspy platform once the device is configured.

## How This Tracker Connects to Plaspy

The ST20U supplies vehicle telemetry to a GNSS-enabled host or a Plaspy-capable gateway that uploads data and location to Plaspy. The host or gateway is configured to send telemetry and position data to the shared Plaspy server and port so fleet managers can view combined location and vehicle parameters in the platform.

- Telemetry such as VIN, road speed, odometer, engine hours, RPM, and fuel consumption is forwarded from ST20U to the host.
- The host or gateway sends position and telemetry to the Plaspy server at d.plaspy.com (54.85.159.138) on port 8888.
- Plaspy receives the stream and automatically detects the tracker protocol so no per-device port mapping is required.
- Event reporting and status updates from the host appear in Plaspy for operational monitoring and alerts.
- Visibility in Plaspy is achieved once the host successfully connects to the Plaspy endpoint and data packets are received.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the ST20U and its host (SMS commands for the device or vendor PC/phone tool for the host).
2. Locate the device IMEI and derive the device ID required by the SMS commands (the device ID is the six digits of the IMEI excluding the final check digit).
3. Enter the Plaspy server endpoint either as domain d.plaspy.com or IP 54.85.159.138 in the host or SMS command fields.
4. Set port 8888 in the host or SMS configuration and choose UDP or TCP if the device or host requires a transport selection.
5. Populate the APN, username, and password placeholders as required by your mobile operator and apply or save the configuration.
6. Restart or cycle power on the device or host if required by the manufacturer to activate the new settings.
7. Validate that the device reports to Plaspy by checking device connectivity and telemetry in the Plaspy platform.

## Example Configuration Commands

The ST20U vendor provides SMS-based commands for APN and reporting setup. The device ID used in these commands is the last six digits of the IMEI excluding the final check digit. Example: if IMEI is 123456789012345 the device ID would be 901234.

- APN and GPRS server command
  - Replace {{device_id}} with the six digit device ID derived from IMEI.
  - Replace [apn], [apnu], and [apnp] with your operator APN, APN username, and APN password. If username or password are not used by your operator, leave those placeholders empty.
  - This command points the tracker/host to the Plaspy server IP and port and includes APN fields.

```
SA200NTW;{{device_id}};02;[mode];[apn_used_flag];[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

- Set reporting interval to 60 seconds
  - Replace {{device_id}} with the six digit device ID.

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

- Check current settings (verification)
  - Replace {{device_id}} with the six digit device ID.

```
SA200CMD;{{device_id}};02;PresetA
```

Notes on placeholders and fields
- {{device_id}} — six digit ID derived from IMEI (last six digits excluding the final check digit). Example conversion is shown above.
- [apn] — operator Access Point Name string required for GPRS data.
- [apnu] — APN username if required by operator, otherwise leave blank.
- [apnp] — APN password if required by operator, otherwise leave blank.
- The example APN command uses the public Plaspy server IP 54.85.159.138 and port 8888. You can also use the domain d.plaspy.com where the host or tool supports domain names.
- The device may be configured using UDP or TCP on port 8888. Plaspy automatically detects the tracker protocol.

## Configuration Notes

- The SMS configuration flow shown above is the public vendor method for setting APN and the GPRS server. Some installations may use a vendor PC tool or handset app instead.
- Firmware and hardware revisions can change the exact command format or available fields; always confirm the command syntax for your device revision.
- Choose UDP or TCP according to host and network conditions; Plaspy accepts either transport on the shared port and will detect the protocol automatically.
- Confirm the IMEI and derived device ID carefully before sending SMS commands; an incorrect device ID will prevent the device from accepting the configuration.
- Retain a copy of any applied commands for troubleshooting and provide those commands to your installer or support team if connectivity issues arise.

## Why Use Plaspy with This Configuration

Using the ST20U with a Plaspy-capable host enables fleets to combine robust vehicle telemetry with GNSS location data inside Plaspy. This integration turns raw location pings into actionable intelligence by supplying VIN, odometer, engine hours, RPM, and fuel consumption data to the platform for reporting, alerts, and operational workflows.

To learn more about Plaspy and how the platform integrates with devices like the ST20U, visit https://www.plaspy.com. Please verify device-specific configuration methods, firmware behavior, and the latest manufacturer details at the official Suntech website http://www.suntechint.com/ as specifications and setup steps can change over time.
