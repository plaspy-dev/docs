---
slug: /navtelekom/smart_s_2411/configuration
id: smart_s_2411-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2411 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Navtelekom SMART S 2411 and the shared Plaspy server settings to enable tracking and telemetry
keywords:
  - Navtelekom SMART S-2411 configuration
  - SMART S-2411 setup Plaspy
  - Navtelekom SMART S-2411 server configuration
  - SMART S-2411 GPS tracker setup
  - SMART S-2411 Plaspy integration
  - Navtelekom GPS tracker configuration
  - vehicle tracker setup Plaspy
  - fleet tracking SMART S-2411
  - SMART S-2411 Bluetooth configuration
  - Navtelekom tracker server settings
---

# Navtelekom - SMART S-2411 Configuration

This page provides the public configuration context and practical setup guidance for using the Navtelekom SMART S-2411 tracker with the Plaspy platform. It describes the shared server settings Plaspy requires, the typical preparation and workflow for configuring a SMART S-2411, and the considerations to validate connectivity and visibility in Plaspy's tracking environment.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol, but exact manufacturer side steps can vary by firmware version, hardware revision, installation type, and the configuration tools used by your vendor. Use this page as a practical reference while also consulting Navtelekom documentation and tools such as the NTC Configurator or Navtelekom remote management for device specific steps.

## Configuration Overview

The objective of configuration is to point the SMART S-2411 at Plaspy so it reliably sends position and telemetry data to the platform and becomes visible in live maps and reports. This involves setting the platform endpoint and port on the tracker, selecting the transport if required, and validating that the device is reporting correctly.

- Configure the device endpoint to the Plaspy server so position fixes and events are delivered to the platform.
- Select the transport protocol on the tracker when the device requires a choice between UDP or TCP.
- Apply configuration and reboot the tracker if required to start reporting to Plaspy.
- Verify telemetry, digital and analog input reporting in Plaspy to confirm correct interpretation.
- Use Bluetooth local configuration or the manufacturer remote tools for firmware updates and advanced parameter tuning.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the SMART S-2411 to report to Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: configure the device to use UDP or TCP if the tracker requires a transport selection
- Plaspy automatically detects the tracker protocol so devices only need to point to the shared endpoint and port
- Note that Plaspy uses the same port for all supported devices so set port 8888 on the tracker

## Typical Requirements Before Setup

- Ensure the SMART S-2411 has power and the internal backup battery is charged for safe configuration and testing.
- Confirm the device has cellular connectivity and a valid single SIM inserted and registered on the 2G network as required by the tracker.
- Access to the manufacturer configuration method such as the NTC Configurator over Bluetooth or Navtelekom remote management tools.
- Confirm firmware version and device firmware notes from Navtelekom to ensure compatibility and feature availability.
- Have the Plaspy server details (d.plaspy.com or 54.85.159.138 and port 8888) ready for configuration.
- A test account or access to Plaspy where you can validate the device appears and reports telemetry after configuration.

## How This Tracker Connects to Plaspy

The SMART S-2411 sends its location fixes and telemetry via the cellular link to the Plaspy server endpoint. Once pointed to Plaspy and using the correct transport and port, Plaspy receives the device data, maps it to the platform device entry, and makes telemetry available for live tracking, alerts and reporting.

- The tracker reports GNSS fixes and configured input/analog telemetry to the Plaspy server endpoint and port.
- Digital inputs and configured analog values are sent as telemetry events and interpreted by Plaspy for alerts and dashboards.
- The device uses either UDP or TCP transport when selected and sends packets to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy automatically detects the tracker protocol so no additional protocol selection on the server side is required.
- Successful reporting is validated when the device appears in Plaspy live maps and telemetry logs.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as the NTC Configurator via Bluetooth or Navtelekom remote management tools.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the tracker server field.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP on the tracker if the device requires a transport selection.
5. Apply or save the configuration to the device and follow any manufacturer prompts to commit changes.
6. Restart or power cycle the SMART S-2411 if the configuration tool or firmware requires a reboot to apply settings.
7. Validate that the device reports to Plaspy by checking the device in the Plaspy platform for position updates and telemetry.

## Example Configuration Commands

No public device-specific command strings are provided on this page. Exact configuration commands and the method to send them vary by Navtelekom firmware and the configuration tool in use. For local configuration use the NTC Configurator over Bluetooth or the Navtelekom remote management channel and follow manufacturer guidance to set:

- server to d.plaspy.com or 54.85.159.138
- port to 8888
- transport to UDP or TCP if required

If you require command line or SMS command formats, consult Navtelekom documentation or your hardware vendor; those methods and exact command syntax depend on firmware and are documented by Navtelekom.

## Configuration Notes

- Firmware variations can change parameter names and menus in the NTC Configurator; always confirm parameter names for server and port with the current Navtelekom documentation.
- Choose TCP if you need connection oriented delivery and your firmware supports it; choose UDP if the device or network is optimized for UDP packets. Test both if behaviour is unclear.
- Bluetooth local configuration via the NTC Configurator is useful for field setup and avoids needing wired access during installation.
- The SMART S-2411 includes an internal backup battery and power protection; consider battery state when performing initial testing and long term monitoring.
- Always verify server host and port settings after saving configuration and after any firmware update, since some firmware updates may reset parameters.

## Why Use Plaspy with This Configuration

Using the SMART S-2411 with Plaspy gives fleet and asset managers a practical path to real time location, event driven alerts, and basic telemetry reporting without complex server configuration. The S-2411's integrated antennas, discrete inputs, analog input and Bluetooth configurator streamline installation and field setup, while directing data to Plaspy provides mapping, historical playback and alerting capabilities for operational oversight.

To learn more about Plaspy and how it works with devices like the Navtelekom SMART S-2411 visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes and technical documentation consult the manufacturer at https://www.navtelecom.ru/.
