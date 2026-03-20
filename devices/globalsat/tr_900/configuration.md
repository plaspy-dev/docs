---
slug: /globalsat/tr_900/configuration
id: tr_900-configuration
sidebar_label: Configuration
title: GlobalSat - TR-900 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for GlobalSat TR 900 to connect the tracker to Plaspy using shared server settings and SMS commands
keywords:
  - GlobalSat TR-900 configuration
  - TR-900 setup Plaspy
  - GlobalSat tracker configuration
  - TR-900 server configuration
  - TR-900 GPS platform setup
  - Plaspy tracker integration
  - OBDII tracker configuration
  - TR-900 SMS setup
  - vehicle tracking TR-900
  - Plaspy server settings
---

# GlobalSat - TR-900 Configuration

This page covers the public configuration context for using the GlobalSat TR-900 tracker with the Plaspy platform. It collects the practical, vendor‑facing steps and public command templates used to point a TR-900 to Plaspy so the device can report vehicle and OBDII data to the platform.

Plaspy uses a shared server endpoint and the same port across all supported devices and automatically detects the tracker protocol. Manufacturer side steps for configuring the TR-900 can vary by firmware, hardware revision, installation type, and vendor tools. When available, this page includes the common SMS command templates provided publicly and guidance for applying the shared Plaspy settings.

## Configuration Overview

The configuration process prepares the TR-900 to communicate with Plaspy, ensuring location and OBDII telemetry are delivered to the platform reliably. For the TR-900 this often involves sending SMS configuration commands or using the official GlobalSat configuration tool, setting the server endpoint and port, and verifying connectivity.

- Configure the device server endpoint so the TR-900 reports to Plaspy
- Provide APN and account parameters as placeholders when required for mobile data
- Verify transport selection (UDP or TCP) and set the shared Plaspy port
- Send the configuration using the vendor method such as SMS commands or official software
- Reboot or restart the tracker if required to apply settings and validate reporting

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP may be used depending on device settings
- Plaspy automatically detects the tracker protocol when the device connects

These shared settings are the public Plaspy values that the TR-900 must use when pointing the device to the platform.

## Typical Requirements Before Setup

- A powered TR-900 plugged into the vehicle OBDII port and in a ready state
- An active SIM card with mobile data or SMS capability configured in the device
- The device IMEI available for use in SMS command templates or manufacturer tools
- Access to a phone capable of sending SMS commands or to the official GlobalSat configuration tool
- Confirmation of APN, APN user, and APN password values from your mobile operator if required
- Knowledge of the device firmware version or access to manufacturer documentation for any firmware specific differences

## How This Tracker Connects to Plaspy

The TR-900 is configured to report location and OBDII diagnostics to the shared Plaspy server endpoint and port. Once the TR-900 has the correct server, port, and APN parameters it will use its mobile data connection to upload events and telemetry for visibility inside Plaspy.

- The tracker is pointed to d.plaspy.com or directly to 54.85.159.138 as the reporting endpoint
- The device is configured to use port 8888 which Plaspy uses for all devices
- Transport is set to either UDP or TCP on the device, depending on what the tracker requires
- Plaspy automatically identifies the device protocol when the tracker establishes a connection
- After successful configuration the tracker’s location and OBDII events become visible in Plaspy

## Common Configuration Workflow

1. Access the official GlobalSat configuration method such as the vendor SMS command format or the GlobalSat software tool. This is the recommended starting point.
2. Enter the Plaspy server as d.plaspy.com or use the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888 which is the shared Plaspy port for all supported devices.
4. Choose UDP or TCP if the TR-900 requires a transport selection and save that choice.
5. Provide APN settings [apn], [apnu], and [apnp] if the device needs mobile data parameters and they are not already present.
6. Apply or save the configuration on the device and send any required SMS commands from a phone if using SMS setup.
7. Restart or reboot the TR-900 if required to apply the new server settings.
8. Validate the device reports to Plaspy and appears in the platform monitoring view.

## Example Configuration Commands

The TR-900 supports SMS-based configuration using command templates. The following public command templates are provided in the device documentation and are shown here in the same order they are typically applied.

Important placeholders:
- {{imei}} — replace with the device IMEI number
- [apn] — replace with the mobile network APN
- [apnu] — replace with the APN username if required
- [apnp] — replace with the APN password if required
- {{checksum}} and {{checksumreeboot}} — two character uppercase hexadecimal XOR checksums computed over the command text before the asterisk character

Primary setup command
```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```
- This command sets APN fields and server E0 to 54.85.159.138 and port E1 to 8888. Keep placeholders and replace them with your values before sending.

Optional reboot command (use when a reboot is required to apply settings)
```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```
- This command requests a device reboot. It is optional and should be used when the tracker requires a restart to apply configuration.

Calculating the checksum
- The checksum is computed as the XOR of the ASCII codes of every character in the command up to but not including the asterisk character, then converted to an uppercase two digit hexadecimal string. The device documentation and common vendor tools provide simple checksum helpers; the example JavaScript used in the public doc computes the checksum this way.

Notes on sending
- Send these commands as plain SMS messages from an allowed phone number to the TR-900 if using SMS configuration. If using the GlobalSat configuration tool, enter the same field values there instead.

## Configuration Notes

- Firmware differences and hardware revisions can change exact command formats or required fields; always confirm with the device firmware release notes when available.
- The TR-900 supports SMS based setup as shown above; if you prefer, use the official GlobalSat software or dealer tools where available.
- Choose UDP or TCP according to the device option; Plaspy accepts either transport on port 8888 and will detect the protocol automatically.
- Always verify the IMEI and APN placeholders before sending commands to avoid misconfiguration.
- After configuration, validate reporting in Plaspy and, if necessary, reboot the device using the provided reboot command.

## Why Use Plaspy with This Configuration

Using the GlobalSat TR-900 together with Plaspy gives organizations a straightforward way to collect both GPS and OBDII vehicle data into a single fleet platform. The TR-900’s OBDII integration combined with Plaspy’s shared server simplifies setup by requiring the same server and port settings across supported devices, helping fleets obtain location, diagnostic, and event visibility with minimal per device variation.

To learn more about Plaspy and how it can manage TR-900 devices at scale visit https://www.plaspy.com. For the latest TR-900 firmware details, command references, and manufacturer specific instructions verify current documentation on the GlobalSat website https://www.globalsat.com.tw/ as device setup methods and firmware behavior can change over time.
