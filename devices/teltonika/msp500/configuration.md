---
slug: /teltonika/msp500/configuration
id: msp500-configuration
sidebar_label: Configuration
title: Teltonika - MSP500 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the Teltonika MSP500 for use with Plaspy using public server settings and example commands for basic device setup
keywords:
  - Teltonika MSP500 configuration
  - MSP500 setup
  - Teltonika MSP500 server configuration
  - MSP500 setup for Plaspy
  - Plaspy tracker configuration
  - GPS tracker MSP500
  - vehicle tracking MSP500
  - Teltonika configuration guide
  - MSP500 SMS configuration
  - MSP500 telemetry setup
---

# Teltonika - MSP500 Configuration

This page provides the public configuration context required to connect a Teltonika MSP500 tracker to the Plaspy platform. It focuses on the shared Plaspy server settings, typical prerequisites, and practical steps you can use with Teltonika configuration methods such as Teltonika Configurator, SMS, or GPRS commands where available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol on its side. Manufacturer-side setup steps can differ by firmware version, hardware revision, installation type, and the vendor tools in use, so treat the instructions here as practical public guidance and verify device-specific controls with official Teltonika documentation.

## Configuration Overview

Configuring the MSP500 for Plaspy prepares the device to send location and event data reliably to the platform using Plaspy’s shared endpoint and port. The goal is to ensure the tracker has correct APN and server settings, the transport type is chosen if required, and that the device is visible in Plaspy after reporting.

- Update or confirm APN and connectivity settings so the tracker can reach GPRS networks.
- Configure the device to report to Plaspy using the shared server domain or IP and the correct port.
- Choose UDP or TCP transport on the device if the hardware requires explicit selection.
- Apply and save settings, then restart the device if the manufacturer workflow requires it.
- Verify the tracker appears and reports in Plaspy after configuration.

## Plaspy Server Settings

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol so the platform handles protocol parsing after the device connects

## Typical Requirements Before Setup

- Ensure the MSP500 has power and a healthy internal battery or external supply for initial configuration and testing.  
- A valid SIM with a working APN for GPRS data access if you will use cellular data (the MSP500 supports GPRS commands and SMS configuration).  
- Access to the manufacturer configuration method you prefer such as Teltonika Configurator via USB or Bluetooth, or SMS/GPRS commands.  
- Know your SIM APN settings including APN name and any username or password required; placeholders are used in example commands below.  
- Confirm the device firmware revision and review Teltonika release notes if updates are needed before deployment.  
- Plan to validate connectivity from the tracker to Plaspy after applying settings.

## How This Tracker Connects to Plaspy

The MSP500 is configured to deliver location and event messages to Plaspy’s shared server endpoint and port so the platform can display devices and deliver telemetry. Once the device has network access and the correct server settings, Plaspy will receive and automatically detect the device protocol.

- The tracker sends GNSS location and event packets to the configured Plaspy server endpoint.  
- Data is directed to d.plaspy.com (or the IP 54.85.159.138) on port 8888.  
- You may choose UDP or TCP transport on the tracker if the device requires a transport selection.  
- Plaspy receives the connection and automatically detects the tracker protocol for parsing.  
- Once reporting, device visibility and event reporting are available inside Plaspy for monitoring and alerts.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software (Teltonika Configurator, USB/Bluetooth tools, or SMS/GPRS commands).  
2. Enter the Plaspy server domain d.plaspy.com or use the Plaspy server IP 54.85.159.138 in the server address field.  
3. Set the server port to 8888.  
4. Choose UDP or TCP on the device if the tracker requires a transport selection.  
5. Configure APN details for the SIM using your carrier values (replace placeholders such as {{apn}}, {{apnu}}, and {{apnp}}).  
6. Apply or save the configuration, then restart the device if the manufacturer workflow requires a reboot for settings to take effect.  
7. Validate that the MSP500 reports to Plaspy by checking device connectivity and visibility in the Plaspy platform.

## Example Configuration Commands

The MSP500 supports sending configuration as a batch command. The public example below shows a common setparam pattern used to set APN and server settings. Replace the APN placeholders with your SIM carrier values.

- Example bulk setparam command (preserve placeholders and replace before use):

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command:
- {{apn}} = your carrier APN name.  
- {{apnu}} = APN username if required, otherwise leave empty.  
- {{apnp}} = APN password if required, otherwise leave empty.  
- The parameters 2004 and 2005 in this example set the server domain and port to the Plaspy values shown earlier.  
- 2006 appears as an additional device option in this public example; consult Teltonika documentation for the exact meaning of individual numeric parameters.  
- This command may be sent via SMS, GPRS, or applied through Teltonika Configurator depending on your preferred configuration method.

## Configuration Notes

- Firmware and hardware revisions may change parameter names and numeric IDs; always confirm parameter mappings in your specific MSP500 firmware documentation.  
- The MSP500 supports Teltonika Configurator via USB or Bluetooth as well as SMS/GPRS commands; choose the method best suited to your installation environment.  
- When a device requires explicit transport selection, you can choose UDP or TCP on the device; Plaspy accepts connections over either transport on port 8888 and will detect the protocol automatically.  
- Keep APN credentials and SIM provisioning details handy during setup to minimize downtime.  
- If you use SMS-based commands, verify SMS lengths and batching behavior per Teltonika guidance.

## Why Use Plaspy with This Configuration

Using the MSP500 with Plaspy provides a straightforward path to fleet visibility, event monitoring, and operational oversight by directing device data to a single shared endpoint and port. With the public server settings shown here and the MSP500’s ability to accept configuration via Configurator or SMS/GPRS, organizations can deploy trackers and bring devices online in Plaspy efficiently.

Learn more about Plaspy and how it manages device connections at https://www.plaspy.com. For device specific controls, exact parameter meanings, and the latest firmware instructions, verify details on the manufacturer site https://www.teltonika-gps.com/ as Teltonika documentation is the authoritative source for MSP500 configuration and parameter definitions.
