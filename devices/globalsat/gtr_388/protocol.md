---
slug: /globalsat/gtr_388/protocol
id: gtr_388-protocol
sidebar_label: Protocol
title: GlobalSat - GTR-388 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GlobalSat GTR-388 and how it communicates with Plaspy for reliable tracking
keywords:
  - GlobalSat GTR-388 protocol
  - GlobalSat GTR-388 GPS protocol
  - GlobalSat GTR-388 communication
  - GTR-388 tracking protocol
  - GlobalSat tracker Plaspy compatibility
  - GTR-388 TCP UDP
  - GlobalSat eBike tracker protocol
  - GTR-388 firmware compatibility
  - Plaspy device protocol
  - vehicle tracking GTR-388
---

# GlobalSat - GTR-388 Protocol

This page provides public protocol context for integrating the GlobalSat GTR-388 GPS tracker with the Plaspy fleet platform. It summarizes how the GTR-388C1 communicates in broad terms, the communication choices available on the device, and the practical connection settings used when reporting location and telematics data to Plaspy. The GTR-388C1 supports multiple transports such as SMS, TCP, UDP, and HTTP and includes I/O options, motion detection, and OTA firmware updates that affect behavior in production.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the Plaspy endpoint. Exact packet timing, reporting intervals, and feature behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive protocol context to help with deployment and troubleshooting.

## Protocol Overview

The protocol implemented by the GTR-388 enables secure and consistent reporting of position, movement, and status from the tracker to a backend service such as Plaspy. At a high level the device protocol determines how the tracker identifies itself, how it packages location and I/O state, and how the server confirms receipt or requests configuration updates.

- Enables the tracker to send location, motion, and IO state to a remote server so Plaspy can render usable telemetry.
- Provides the means for the device to identify itself to Plaspy so data is associated with the correct asset.
- Supports multiple transport options (TCP, UDP, HTTP, SMS) so installers can match connectivity and network availability.
- Works alongside OTA firmware updates and device I/O features to ensure ongoing reliability and functional control.
- Shapes reporting behavior such as heartbeat intervals and movement based reporting while allowing server side processing to normalize incoming data.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports on a single shared endpoint and port and uses that incoming data to detect which protocol a device is using. When a GTR-388 is configured to report to the Plaspy endpoint, Plaspy will automatically recognize the device protocol without a user manually selecting a protocol inside the platform.

- Plaspy listens on a common endpoint and port for all supported devices which simplifies device configuration.
- If the tracker is pointed at d.plaspy.com or 54.85.159.138 on the Plaspy port, Plaspy will accept incoming reports and detect the protocol automatically.
- Users typically do not need to choose a protocol inside Plaspy if the device is correctly configured to report to the Plaspy endpoint.
- Automatic detection helps streamline onboarding for a range of device models that support the standard transports used by GTR-388.
- Proper device configuration and up to date firmware improve the chance that Plaspy can detect and process device reports immediately.

## Transport and Connection Context

The GTR-388 supports multiple transport methods. For communication with Plaspy, the practical connection context is that devices may use either UDP or TCP to send reports to the Plaspy endpoint on the shared port. Plaspy publishes the public connection target so installers can configure devices consistently.

- Devices may be configured to report to d.plaspy.com or directly to 54.85.159.138.
- The Plaspy listening port for devices is 8888 and all devices in Plaspy use the same port.
- The GTR-388 can use either UDP or TCP on port 8888 depending on device settings and network requirements.
- HTTP or SMS reporting remain options supported by the device but are architecturally different from persistent TCP or UDP sessions.
- Use the transport most appropriate for your SIM and network conditions; TCP is common for reliable delivery while UDP is used where lightweight reporting is preferred.

## Protocol Compatibility Notes

- The GTR-388C1 is compatible with Plaspy when configured to report to the Plaspy endpoint, but exact behavior can depend on firmware and carrier network behavior.
- Firmware updates delivered via OTA can change reporting formats, available features, and timing parameters, so note firmware level when validating compatibility.
- Hardware revisions or region specific SKUs can introduce subtle differences in supported bands or protocol variants; confirm the exact model variant before wide deployment.
- Choosing TCP versus UDP affects delivery guarantees and may influence how the device reconnects after network loss.
- Manufacturer configuration options for I/O, motion detection, and power management can affect the data Plaspy receives and how often it arrives.
- Always validate critical production behavior against current manufacturer documentation and test devices in your target network environment.

## Why Protocol Understanding Matters

Understanding how the GTR-388 communicates with Plaspy helps ensure reliable tracking, simpler troubleshooting, and predictable device lifecycle behavior. Knowing the role of transport, firmware, and device configuration supports better deployments and fewer surprises in the field.

- Helps ensure devices are pointed at the correct Plaspy endpoint so data arrives consistently.
- Aids troubleshooting when reports are missing, intermittent, or contain unexpected values.
- Guides firmware and configuration choices that affect battery life, reporting frequency, and motion based updates.
- Informs decisions about TCP versus UDP based on reliability needs and SIM data plans.
- Supports planning for OTA updates and long term device maintenance.

## Why Use Plaspy with This Protocol

Using the GlobalSat GTR-388 with Plaspy gives organizations a straightforward way to capture vehicle and eBike location, motion events, and IO state while relying on a single shared endpoint for device reporting. Plaspy’s automatic protocol detection and unified port simplify onboarding and reduce the need for per device platform configuration, letting fleets focus on operations and analytics rather than transport plumbing.

If you want to learn more about how Plaspy handles device connectivity and protocol support, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revisions for the GlobalSat GTR-388, consult the manufacturer documentation at https://www.globalsat.com.tw/ to verify current behavior and settings.
