/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.commons.protocol.serde;

import io.airbyte.commons.version.AirbyteVersion;
import io.airbyte.protocol.models.AirbyteMessage;
import jakarta.inject.Singleton;

@Singleton
public class AirbyteMessageV1Serializer extends AirbyteMessageGenericSerializer<AirbyteMessage> {

  public AirbyteMessageV1Serializer() {
    super(new AirbyteVersion("1.0.0"));
  }

}
